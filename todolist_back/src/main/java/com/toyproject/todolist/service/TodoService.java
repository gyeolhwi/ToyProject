package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import com.toyproject.todolist.dto.RespListTodoesDto;
import com.toyproject.todolist.dto.TodoDto;

import java.util.List;

public interface TodoService {
     // insert 유저
     int addTodo(TodoDto.ReqDto dto);

     // select 리스트 유저의 text
     List<TodoDto.RespDto> getListAll(int userid);

     // 삭제
     int removeTodo(int todo_id);

     // 전체 조회
     List<RespListTodoesDto> getListTodoes();

     // update 수정(id,수정 할 text)
     int updateTodo(ReqUpdateTodoDto reqDto);

     // delete 삭제(todo_id)
     int deleteTodo(int todo_id);


     // 로그인 구현

     List<TodoDto.userRespDto> getListTodo(TodoDto.userReqDto dto);

     int addUserTodo(TodoDto.userReqDto dto);

     int editUserTodo(TodoDto.userReqDto dto);

     int editChk(TodoDto.userReqDto dto);


}
