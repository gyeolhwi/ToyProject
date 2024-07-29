package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class ReqGetTodoDto {

    private int todo_id;
    private String todo_text;
    private int todo_chk_id;
    private LocalDate todo_date;


}
