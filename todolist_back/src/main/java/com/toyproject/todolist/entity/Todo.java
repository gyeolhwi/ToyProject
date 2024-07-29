package com.toyproject.todolist.entity;


import com.toyproject.todolist.dto.TodoDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    private int todo_id;
    private String todo_text;
    private int todo_chk_id;
    private LocalDate todo_date;


    private int user_id;
    private String user_name;
    private String user_password;
    private LocalDate register_date;

    public TodoDto.RespDto toDto(){
        return TodoDto.RespDto.builder()
                .todoId(todo_id)
                .todoText(todo_text)
                .todoChkId(todo_chk_id)
                .build();
    }
}
