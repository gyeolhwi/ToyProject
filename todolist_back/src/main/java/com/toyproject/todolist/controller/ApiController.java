package com.toyproject.todolist.controller;


import com.toyproject.todolist.dto.TodoDto;
import com.toyproject.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1/todo")
public class ApiController {


    @Autowired
    private TodoService todoService;

    // 해당id 찾아서 list조회
    @GetMapping("/{userid}")
    public ResponseEntity<?> getId(@PathVariable int userid) {
        return ResponseEntity.ok().body(todoService.getListAll(userid));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addTodo(@RequestBody TodoDto.ReqDto dto) {
        log.info("dto : {}", dto);
        return ResponseEntity.ok().body(todoService.addTodo(dto));
    }
}
