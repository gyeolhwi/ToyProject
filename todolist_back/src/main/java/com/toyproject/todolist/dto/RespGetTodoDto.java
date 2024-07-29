package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Builder
@Data
public class RespGetTodoDto {

    public static class Info {
        private int todo_id;
        private String todo_text;
        private int todo_chk_id;
        private LocalDate todo_date;
    }
}
