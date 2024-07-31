import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getDate, todoAtom } from '../../atoms/atom';
import useInput from '../../hooks/useInput';
import * as s from './style';
import api from '../../apis/instance';


function TodoList(props) {
    const addInput = useInput();
    const [text, setText] = useState("");
    // 객체 들어올거임
    const [todo, setTodo] = useRecoilState(todoAtom);
    const [dateYear, setgetDateYear] = useRecoilState(getDate);

    const handleOnchange = (e) => {
        setText(e.target.value);
    }

    // 처음에 조회 , 추가,수정,날짜변경시에 일어나야함
    useEffect(() => {
        getRender();
    }, []);


    // const render = async () => {
    //     let list = null;
    //     try {
    //         const rs = await getRender();
    //         list = rs.data;
    //         setTodo(list);
    //     } catch (e) {
    //         console.error(e);
    //     }
    //     return list;
    // }


    const getRender = async () => {
        let result = null;
        try {
            const rs = await api.get("todoes");
            result = rs.data;
            setTodo(result);
            console.log(rs.data);
        } catch (e) {
            console.error(e);
        }
        return result;
    }


    const navigator = useNavigate();

    const handleLoginClick = (e) => {
        navigator(e.target.name);
    }

    const handleKeydown = (e) => {
        if (e.keyCode === 13) {
            console.log(todo);
        }
    }





    return (
        <div css={s.layout}>
            <header>
                <div css={s.title}>
                    <h1>TodoList</h1>
                </div>
                <div css={s.login}>
                    <button name='/login' onClick={handleLoginClick}>로그인</button>
                    <button name='/register' onClick={handleLoginClick}> 회원가입</button>
                </div>
                <input css={s.time} type='month' name='time' />
            </header>
            <div>
                <div css={s.container}>
                    {/* 전체의 dataContainer는 아래에dataContainer와 다른 css사용하세요 */}
                    <div css={s.dataContainer}>
                        <h2>전체</h2>
                        {/*새로운 Todo 등록 */}
                        <div css={s.content}>

                            <label htmlFor="ck1" css={s.ckLabel} />
                            {/* input 빼고 이모티콘 추가 */}
                            <input type='text' placeholder='내용을 입력하세요' name='textinput' onChange={handleOnchange} onKeyDown={handleKeydown} value={text} />
                            <button >확인</button>
                        </div>
                        {/* section은 스크롤용 */}
                        <div css={s.section}>
                                {todo.map(todo=>(
                                    <div css={s.successDataContainer} key={todo.id}>
                                <ul>
                                    <li css={s.chkBox}>
                                        <input type="checkbox" id='chk' />
                                        <label htmlFor="chk" ></label>
                                    </li>
                                    <li>{todo.text}</li>
                                    <li>
                                        <button>&nbsp;수정&nbsp;</button>
                                        <button>&nbsp;삭제&nbsp;</button>
                                    </li>
                                </ul>
                            </div>
                        ))}

                        </div>
                    </div>
                    <div css={s.dataContainer}>
                        <h2>미완료</h2>
                        <div css={s.section}>
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                                    <li><button>&nbsp;수정&nbsp;</button></li>
                                    <li><button>&nbsp;삭제&nbsp;</button></li>
                                </ul>
                            </div>
                            {/*  */}

                        </div>
                    </div>
                    <div css={s.dataContainer}>
                        <h2>완료</h2>
                        <div css={s.section}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;