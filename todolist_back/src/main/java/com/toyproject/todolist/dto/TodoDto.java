package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

public class TodoDto {

    @Data
    public static class ReqDto {
        // insert into 할 때 쓸 것
        private int todoId;
        private String todoText;
        private int todoChkId;
        private String todoDate;

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
    public static class RespDto {
        private int todoId;
        private String todoText;
        private int todoChkId;
    }

    //로그인 Dto
    @Data
    public static class userReqDto {
        private int userId;
        private String todoDate;
        private int todoId;
        private String todoText;
        private int chkId;


        public Todo toEntity() {
            return Todo.builder()
                    .todo_user_id(userId)
                    .date(todoDate)
                    .build();
        }
        
        // 로그인 구현 후 사용 될 메소드들 테스트 안했음
        public Todo toInsertEntity() {
            return Todo.builder()
                    .todo_user_id(userId)
                    .todo_text(todoText)
                    .build();
        }

        public Todo toEditEntity() {
            return Todo.builder()
                    .todo_id(todoId)
                    .todo_text(todoText)
                    .todo_chk_id(chkId)
                    .build();
        }
    }

    // 로그인후 가져올 때 Resp
    @Data
    @Builder
    public static class userRespDto {
        private int todoId;
        private String todoText;
        private int chkId;
        private String todoDate;


    }
}
