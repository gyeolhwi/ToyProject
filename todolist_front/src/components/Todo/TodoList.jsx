import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import api from '../../apis/instance';
import { getDate, todoAtom } from '../../atoms/atom';
import useInput from '../../hooks/useInput';
import * as s from './style';
import Modal from '../Modal/Modal';
import Swal from 'sweetalert2';


function TodoList(props) {
    const addInput = useInput("");
    const [text, setText] = useState({
        todoText: "",
        todoDate: ""
    });
    // 객체 들어올거임
    const [todo, setTodo] = useRecoilState(todoAtom);

    const [today, setToDay] = useRecoilState(getDate);

    const [editTodo, setEditTodo] = useState({
        todoId: "",
        todoText: ""
    });

    const [isModalOpen, setModalOpen] = useState(false);
    const [editMode, setEditMode] = useState("");

    const handleOnchange = (e) => {
        setText(text => {
            return {
                ...text,
                [e.target.name]: e.target.value,
                todoDate: today.todoDate
            }
        })
    }
    // 처음에 조회 , 추가,수정,날짜변경시에 일어나야함

    useEffect(() => {
        getRenderDate();
    }, [today]);


    const getRender = async () => {
        let result = null;
        try {
            const rs = await api.get("/todolist");
            result = rs.data;
            setTodo(result);
        } catch (e) {
            console.error(e);
        }
        return result;
    }

    const getRenderDate = async () => {
        let result = null;
        try {
            const rs = await api.get(`/todolist`, {
                params: {
                    month: today.todoDate
                }
            });
            result = rs.data;
            setTodo(result);
        } catch (e) {
            console.error(e);
        }
        return result;
    }
    const addText = async () => {
        let result = null;
        try {
            const rs = await api.post("todo/add", text);
            getRenderDate();
        } catch (e) {
            console.error(e);
        } finally {
            setText({
                todoId: "",
                todoText: ""
            });
        }
    }

    const remove = async (id) => {
        let result = null;
        try {
            const rs = await api.delete(`/todo/${id}`);
            getRenderDate();
        } catch (e) {
            console.error(e);
        }
    }

    const heart = async (todoId, todoChkId) => {
        const putData = { todoId: todoId, todoChkId: todoChkId === 0 ? 1 : 0 }

        await api.put(`/todo/chkupdate/${todoId}`, putData);
        getRenderDate();
    }

    const navigator = useNavigate();

    const handleLoginClick = (e) => {
        navigator(e.target.name);
    }

    const handleKeydown = (e) => {
        if (e.keyCode === 13) {
            addText();
        }
    }

    // 캘린더 클릭
    const handleDateOnChange = async (e) => {
        setToDay(today => {
            return {
                ...today,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmitClick = () => {
        addText();
    }
    const handleEditClick = (e) => {
        setModalOpen(true);
        // 레스트문법 사용으로 id,text만 객체?로 묶여나옴
        const { checkedId, todoDate, ...rest } = todo.filter(t => t.todoId === parseInt(e.target.value))[0];
        setEditTodo(rest);

    }

    const handleRemoveClick = (e) => {
        Swal.fire({
            title: "삭제 하시겠습니까?",
            font: "Nanumpen",
            showCancelButton: true,
            confirmButtonText: "확인",
            cancelButtonText: "취소",
            position: 'top',
            width: `400`,
            backdrop: `left top,
            no-repeat`,
            customClass: {
                popup: "sweet-back-img",
                title: "sweet-title",
                actions: "sweet-actions"
            },
        }).then(rs => {
            if (rs.isConfirmed) {
                remove(e.target.value);
                Swal.fire({
                    title: "삭제완료!",
                    font: "Nanumpen",
                    position: 'top',
                    width: `400`,
                    backdrop: `left top,
                    no-repeat`,
                    customClass: {
                        popup: "sweet-back-img",
                        title: "sweet-title",
                        actions: "sweet-actions"
                    },
                })
            }
        });
    }


    useEffect(() => {
        // heart(editMode);
    }, [setTodo]);

    const handleHeartClick = (id, todoChkId) => {
        heart(id, todoChkId);
        // setTodo(todo => {
        //     return todo.map(t => t.todoId === id
        //         ? {
        //             ...t,
        //             todoChkId: t.todoChkId === 0 ? 1 : 0
        //         } : t
        //     )
        // })

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
                <input css={s.time} type='month' name='todoDate' value={today.todoDate} onChange={handleDateOnChange} />
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
                            {todo?.map((tt) =>
                                <div css={s.successDataContainer} key={tt.todoId}>
                                    <ul>
                                        <li css={s.chkBox}>
                                            <input type="checkbox" id='chk' checked={tt.todoChkId === 1} />
                                            <label htmlFor="chk" onClick={() => handleHeartClick(tt.todoId, tt.todoChkId)} ></label>
                                        </li>
                                        <li>{tt.todoText}</li>
                                        <li>
                                            <button onClick={handleEditClick} value={tt.todoId} >&nbsp;수정&nbsp;</button>
                                            <button onClick={handleRemoveClick} value={tt.todoId}>&nbsp;삭제&nbsp;</button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                    </div>
                    <div css={s.dataContainer}>
                        <h2>미완료</h2>
                        <div css={s.section}>
                            {todo?.filter((todo) => todo.todoChkId === 0)
                                ?.map((tt) => (
                                    <div css={s.successDataContainer} key={tt.todoId}>
                                        <ul>
                                            <li css={s.chkBox}>
                                                <input type="checkbox" id='chk' checked={tt.todoChkId === 1} />
                                                <label htmlFor="chk" onClick={() => handleHeartClick(tt.todoId, tt.todoChkId)}  ></label>
                                            </li>
                                            <li>{tt.todoText}</li>
                                            <li>
                                                <button onClick={handleEditClick} value={tt.todoId} >&nbsp;수정&nbsp;</button>
                                                <button onClick={handleRemoveClick} value={tt.todoId}>&nbsp;삭제&nbsp;</button>
                                            </li>
                                        </ul>
                                    </div>
                                ))}

                        </div>
                    </div>
                    <div css={s.dataContainer}>
                        <h2>완료</h2>
                        <div css={s.section}>
                            {todo?.filter((todo) => todo.todoChkId === 1)
                                ?.map((tt) => (
                                    <div css={s.successDataContainer}>
                                        <ul>
                                            <li css={s.chkBox}>
                                                <input type="checkbox" id='chk' checked={tt.todoChkId === 1} />
                                                <label htmlFor="chk" onClick={() => handleHeartClick(tt.todoId, tt.todoChkId)}  ></label>
                                            </li>
                                            <li>{tt.todoText}</li>
                                            <li>
                                                <button onClick={handleEditClick} value={tt.todoId} >&nbsp;수정&nbsp;</button>
                                                <button onClick={handleRemoveClick} value={tt.todoId}>&nbsp;삭제&nbsp;</button>
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