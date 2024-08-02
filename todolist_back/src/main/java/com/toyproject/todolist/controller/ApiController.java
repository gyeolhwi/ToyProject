package com.toyproject.todolist.controller;


import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import com.toyproject.todolist.dto.RespTodoListDto;
import com.toyproject.todolist.dto.TodoDto;
import com.toyproject.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Slf4j
//@CrossOrigin // config 허용으로 사용안해도 됨
@RestController
@RequestMapping("/api/v1")
public class ApiController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/todo/add")
    public ResponseEntity<?> addTodo(@RequestBody TodoDto.ReqDto dto) {
        log.info("dto : {}", dto);
        return ResponseEntity.ok().body(todoService.addTodo(dto));
    }

    // 해당id 찾아서 list조회
    @GetMapping("/todo/{userid}")
    public ResponseEntity<?> getId(@PathVariable int userid) {
        return ResponseEntity.ok().body(todoService.getListAll(userid));
    }

    // 전체 조회
   @GetMapping("/todolist")
   public ResponseEntity<?> getList(@RequestParam (required = false) String month) {
       log.info("{}", month);
        return ResponseEntity.ok().body(todoService.getAllTodoList(month));
   }

   // 해당날짜에 해당하는 모든 것 들고오기
    @GetMapping("/todo/{today}")
    public ResponseEntity<?> getDateList(@PathVariable String today) {
        return ResponseEntity.ok().body(todoService.getDateList(today));
    }

    //해당 id 찾아서 수정
    @PutMapping("/todo/edit")
    public ResponseEntity<?> editTodo(@RequestBody ReqUpdateTodoDto reqDto) {
        return ResponseEntity.ok().body(todoService.updateTodo(reqDto));
    }

    // 체크 시에 업데이트 요청
    @PutMapping("/todo/chkupdate/{todoId}")
    public ResponseEntity<?> updateChkId(@PathVariable int todoId, @RequestBody ReqUpdateTodoDto reqUpdate) {
        log.info("{}", reqUpdate);
        return ResponseEntity.ok().body(todoService.updateChk(reqUpdate));
    }

    //해당 id 찾아서 삭제
    @DeleteMapping("/todo/{todo_id}")
    public ResponseEntity<?> deleteTodo(@PathVariable int todo_id) {
        return ResponseEntity.ok().body(todoService.deleteTodo(todo_id));
    }
}
