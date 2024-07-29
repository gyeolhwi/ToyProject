package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class UserDto {
    private int userId;
    private String userName;
    private String userPassword;
    private LocalDate registerDate;
}
