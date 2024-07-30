package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

public class TodoDto {

    @Data
    public static class ReqDto{
        // insert into 할 때 쓸 것
        private int todoId;
        private String todoText;
        private int todoChkId;
        private LocalDate todoDate;

        private String userId;

        public Todo toEntity() {
            return Todo.builder()
                    .todo_id(todoId)
                    .todo_text(todoText)
                    .build();
        }
    }

    @Data
    @Builder
    public static class RespDto{
        private int todoId;
        private String todoText;
        private int todoChkId;
    }


}
