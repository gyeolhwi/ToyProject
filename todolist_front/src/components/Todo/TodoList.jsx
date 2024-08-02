import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import api from '../../apis/instance';
import { getDate, todoAtom } from '../../atoms/atom';
import useInput from '../../hooks/useInput';
import * as s from './style';
import Modal from '../Modal/Modal';


function TodoList(props) {
    const addInput = useInput("");
    const [text, setText] = useState({
        todoText: ""
    });
    // 객체 들어올거임
    const [todo, setTodo] = useRecoilState(todoAtom);

    const [today, setToDay] = useRecoilState(getDate);

    const [editTodo, setEditTodo] = useState({
        todoId: "",
        todoText: ""
    });

    const [isModalOpen, setModalOpen] = useState(false);
    const [editMode , setEditMode] = useState(false);



    const handleOnchange = (e) => {
        setText(text => {
            return {
                ...text,
                [e.target.name]: e.target.value
            }

        })

    }

    // 처음에 조회 , 추가,수정,날짜변경시에 일어나야함
    useEffect(() => {
        let list = null;
        list = getRender();
        console.log(list);
    }, []);

    const getRender = async () => {
        let result = null;
        try {
            const rs = await api.get("/todolist");
            result = rs.data;
            setTodo(result);
            // console.log(rs.data);
        } catch (e) {
            console.error(e);
        }
        return result;
    }

    const getRenderDate = async () => {
        let result = null;
        try {
            const rs = api.get(`/date/${today}`);
            result = rs.data;
            setTodo(result);
        } catch (e) {
            console.error(e);
        }
    }

    const addText = async () => {
        let result = null;
        try {
            const rs = await api.post("todo/add", text);
            setText({
                todoText: ""
            })
            getRender();

        } catch (e) {
            console.error(e);
        }
    }

    const remove = async (id) => {
        let result = null;
        try {
            const rs = await api.delete(`/todo/${id}`);
            getRender();
        } catch (e) {
            console.error(e);
        }
    }
    const heart = async (id) => {
        const { todoDate, todoText, ...rest } = todo[id];
        console.log(rest);
        api.put("/todo/chkupdate", rest);
        getRender();
    }

    const navigator = useNavigate();

    const handleLoginClick = (e) => {
        navigator(e.target.name);
    }

    const handleKeydown = (e) => {
        if (e.keyCode === 13) {
            console.log(todo);
            addText();
            console.log(today);
        }
    }
    // 캘린더 클릭
    const handleDateOnChange = (e) => {
        setToDay(today => {
            return {
                ...today,
                [e.target.name]: e.target.value
            }
        })
        getRenderDate();
    }
    const handleSubmitClick = () => {
        addText();
    }
    const handleEditClick = (e) => {
        setModalOpen(true);
        // 레스트문법 사용으로 id,text만 객체?로 묶여나옴
        const { checkedId, todoDate, ...rest } = todo.filter(t => t.todoId === parseInt(e.target.value))[0];
        setEditTodo(rest);
        // console.log("rest" + rest);
        // console.log("chkid" + checkedId);

        // console.log(e.target.value);
    }

    const handleRemoveClick = (e) => {
        if (window.confirm("삭제할껴?")) {
            remove(e.target.value);
        } else {
            alert("취소됨");
        }
    }

    useEffect(() => {
        
    }, [editMode])

    const handleHeartClick = async (id) => {
         setTodo(todo => {
            return todo.map(t => t.todoId === id
                ? {
                    ...t,
                    todoChkId: t.todoChkId === 0 ? 1 : 0
                } : t
            )
        })

        heart(id);
    }
    return (
        <div css={s.layout}>
            <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} editTodo={editTodo} setEditTodo={setEditTodo} />
            <header>
                <div css={s.title}>
                    <h1>TodoList</h1>
                </div>
                <div css={s.login}>
                    <button name='/login' onClick={handleLoginClick}>로그인</button>
                    <button name='/register' onClick={handleLoginClick}> 회원가입</button>
                </div>
                <input css={s.time} type='month' name='today' value={today.today} onChange={handleDateOnChange} />
            </header>
            <div>
                <div css={s.container}>
                    {/* 전체의 dataContainer는 아래에dataContainer와 다른 css사용하세요 */}
                    <div css={s.dataContainer}>
                        <h2 onClick={() => console.log(todo[0])} >전체</h2>
                        {/*새로운 Todo 등록 */}
                        <div css={s.content}>

                            <label htmlFor="ck1" css={s.ckLabel} />
                            {/* input 빼고 이모티콘 추가 */}
                            <input type='text' placeholder='내용을 입력하세요' name='todoText' onChange={handleOnchange} onKeyDown={handleKeydown} value={text.todoText} />
                            <button onClick={handleSubmitClick}>확인</button>
                        </div>
                        {/* section은 스크롤용 */}
                        <div css={s.section}>
                            {todo.map((todo,idx) => (
                                <div css={s.successDataContainer} key={todo.todoId}>
                                    <ul>
                                        <li css={s.chkBox}>
                                            <input type="checkbox" id='chk' checked={todo.todoChkId === 1} />
                                            <label htmlFor="chk" onClick={() => handleHeartClick(idx)} ></label>
                                        </li>
                                        <li>{todo.todoText}</li>
                                        <li>
                                            <button onClick={handleEditClick} value={todo.todoId} >&nbsp;수정&nbsp;</button>
                                            <button onClick={handleRemoveClick} value={todo.todoId}>&nbsp;삭제&nbsp;</button>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div css={s.dataContainer}>
                        <h2>미완료</h2>
                        <div css={s.section}>
                            {todo.filter((todo) => todo.todoChkId === 0)
                                .map((todo) => (
                                    <div css={s.successDataContainer} key={todo.todoId}>
                                        <ul>
                                            <li css={s.chkBox}>
                                                <input type="checkbox" id='chk' checked={todo.todoChkId === 1} />
                                                <label htmlFor="chk" onClick={() => handleHeartClick(todo.todoId)} ></label>
                                            </li>
                                            <li>{todo.todoText}</li>
                                            <li>
                                                <button onClick={handleEditClick} value={todo.todoId} >&nbsp;수정&nbsp;</button>
                                                <button onClick={handleRemoveClick} value={todo.todoId}>&nbsp;삭제&nbsp;</button>
                                            </li>
                                        </ul>
                                    </div>
                                ))}

                        </div>
                    </div>
                    <div css={s.dataContainer}>
                        <h2>완료</h2>
                        <div css={s.section}>
                            {todo.filter((todo) => todo.todoChkId === 1)
                                .map((todo) => (
                                    <div css={s.successDataContainer}>
                                        <ul>
                                            <li css={s.chkBox}>
                                                <input type="checkbox" id='chk' checked={todo.todoChkId === 1} />
                                                <label htmlFor="chk" onClick={() => handleHeartClick(todo.todoId)} ></label>
                                            </li>
                                            <li>{todo.todoText}</li>
                                            <li>
                                                <button onClick={handleEditClick} value={todo.todoId} >&nbsp;수정&nbsp;</button>
                                                <button onClick={handleRemoveClick} value={todo.todoId}>&nbsp;삭제&nbsp;</button>
                                            </li>
                                        </ul>
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;