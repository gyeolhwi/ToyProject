package com.toyproject.todolist.entity;

import com.toyproject.todolist.dto.ReqGetTodoDto;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class Todo {

    private int todo_id;
    private String todo_text;
    private int todo_chk_id;
    private LocalDate todo_date;

    public ReqGetTodoDto toDto() {
        return ReqGetTodoDto.builder()
                .todo_id(getTodo_id())
                .todo_text(getTodo_text())
                .todo_chk_id(getTodo_chk_id())
                .todo_date(getTodo_date())
                .build();
    }
}
