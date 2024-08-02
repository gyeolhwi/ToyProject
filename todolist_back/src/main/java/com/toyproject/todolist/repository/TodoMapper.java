package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.Todo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoMapper {
    int save(Todo todo);

    List<Todo> getListAll(int userId);

    List<Todo> getAllTodoList();

    int update(Todo todo);

    int updateChk(int todo_chk_id);

    int delete(int todoId);

    // 전체 조회

    //로그인 구현 후 사용 될 메소드(테스트X)
    List<Todo> getList(int userId, String date_id);

    int add(Todo todo);

    int edit(Todo todo);

    int editChk(Todo todo);
}
