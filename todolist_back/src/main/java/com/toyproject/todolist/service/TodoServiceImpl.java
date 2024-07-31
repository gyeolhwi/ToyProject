package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import com.toyproject.todolist.dto.TodoDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoMapper todoMapper;

    @Override
    public int addTodo(TodoDto.ReqDto dto) {
        return todoMapper.save(dto.toEntity());
    }

    @Override
    public List<TodoDto.RespDto> getListAll(int userid) {
        return todoMapper.getListAll(userid).stream().map(Todo::toDto).collect(Collectors.toList());
    }

    // 삭제
    @Override
    public int removeTodo(int todo_id) {
        return 0;
    }

    @Override
    public int updateTodo(ReqUpdateTodoDto reqDto) {
        // Todo에 객체에 reqDto데이터들을 담음
        Todo todo = Todo.builder()
                .todo_id(reqDto.getTodoId())
                .todo_text(reqDto.getTodoText())
                .todo_chk_id(reqDto.getTodoChkId())
                .todo_date(reqDto.getTodoDate())
                .build();

        return todoMapper.update(todo);
    }

    @Override
    public int deleteTodo(int todoId) {
        return todoMapper.delete(todoId);
    }

    // 로그인 구현 후 사용 될 메소드 (테스트 안 했음)
    @Override
    public List<TodoDto.userRespDto> getListTodo(TodoDto.userReqDto dto) {
        return todoMapper.getList(dto.getUserId(), dto.getTodoDate()).stream().map(Todo::userToDto).collect(Collectors.toList());
    }

    @Override
    public int addUserTodo(TodoDto.userReqDto dto) {
        return todoMapper.add(dto.toInsertEntity());
    }

    @Override
    public int editUserTodo(TodoDto.userReqDto dto) {
        return todoMapper.edit(dto.toEditEntity());
    }

    @Override
    public int editChk(TodoDto.userReqDto dto) {
        return todoMapper.edit(dto.toEditEntity());
    }
}
