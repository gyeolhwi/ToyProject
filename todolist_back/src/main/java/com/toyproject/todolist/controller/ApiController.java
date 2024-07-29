package com.toyproject.todolist.controller;

import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoListMapper;
import com.toyproject.todolist.service.TodoListService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("api/v1/todo")
public class ApiController {

    @Autowired
    private TodoListService todoListService;

    @Autowired
    private TodoListMapper todoListMapper;

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<?> getId(@PathVariable int id) {
        log.info("id = {}",id);
        return ResponseEntity.ok().body(null);
    }

    @CrossOrigin
    @GetMapping("/list")
    public List<Todo> getTodoListApi() {
        return todoListMapper.getTDListAll();
    }


}
