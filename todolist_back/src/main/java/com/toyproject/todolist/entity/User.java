package com.toyproject.todolist.entity;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class User {
    private int user_id;
    private String user_name;
    private String user_password;
    private LocalDate register_date;

}
