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
    private String todo_date;
    
    // 로그인 후 사용 될 Dto ( 테스트 안함)
    private int todo_user_id;
    private String date;

    public TodoDto.RespDto toDto(){
        return TodoDto.RespDto.builder()
                .todoId(todo_id)
                .todoText(todo_text)
                .todoChkId(todo_chk_id)
                .build();
    }

    public TodoDto.userRespDto userToDto(){
        return TodoDto.userRespDto.builder()
                .todoId(todo_id)
                .todoText(todo_text)
                .chkId(todo_chk_id)
                .todoDate(date)
                .build();
    }
}
