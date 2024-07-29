package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

public class TodoDto {

    @Builder
    @Data
    public static class Info {
        private int todo_id;
        private String todo_text;
        private int todo_chk_id;
        private LocalDate todo_date;
    }

    public static List<ReqGetTodoDto> toList(List<Todo> todoList) {
        return todoList.stream().map(Todo::toDto).collect(Collectors.toList());
    }
}
