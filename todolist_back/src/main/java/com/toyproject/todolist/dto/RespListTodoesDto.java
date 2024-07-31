package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class RespListTodoesDto {
    private int todoId;
    private String todoText;
    private int todoChkId;
    private LocalDate todoDate;
}
