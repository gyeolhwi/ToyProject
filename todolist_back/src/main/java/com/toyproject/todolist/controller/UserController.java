package com.toyproject.todolist.controller;


import com.toyproject.todolist.dto.TodoDto;
import com.toyproject.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/api/v1/todo/user")
@RestController
public class UserController {

    @Autowired
    private TodoService service;

    // 로그인 구현 백엔드
    @GetMapping("/get")
    public ResponseEntity<?> getUserTodo(@RequestBody TodoDto.userReqDto dto) {
        return ResponseEntity.ok().body(service.getListTodo(dto));
    }

    @PostMapping("/add")
    public ResponseEntity<?> addTodo(@RequestBody TodoDto.userReqDto dto) {
        return ResponseEntity.ok().body(service.addUserTodo(dto));
    }

    @PutMapping("/edit")
    public ResponseEntity<?> edit(@RequestBody TodoDto.userReqDto dto) {
        return ResponseEntity.ok().body(service.editUserTodo(dto));
    }

    @PutMapping("/edit/chk")
    public ResponseEntity<?> chk(@RequestBody TodoDto.userReqDto dto) {
        return ResponseEntity.ok().body(service.editChk(dto));
    }
}
