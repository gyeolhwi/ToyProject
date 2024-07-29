package com.toyproject.todolist.service;

import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TodoListServiceImpl implements TodoListService {

    @Autowired
    private TodoListMapper todoListMapper;

    @Override
    public List<Todo> getTDListAll() {
        return todoListMapper.getTDListAll();
    }

}
