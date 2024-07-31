package com.toyproject.todolist.dto;


import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class RespListTodoesDto {
    private int id;
    private String text;
    private int chkId;
    private LocalDate date;
}
