import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';


function TodoList(props) {
    const addInput = useInput();

    const navigator = useNavigate();

    const [todo, setTodo] = useState();

    const handleLoginClick = () => {
        navigator("/login");
    }

    const handleAddClick = () => { }

    const handleKeydown = (e) => {
        if (e.keyCode === 13) {
            console.log(addInput.textInput);
        }
    }


    const handleCompleteCheck = () => { }

    const handleTodoAddClick = () => { }

    return (
        <div css={s.layout}>
            <header>
                <div css={s.title}>
                    <h1>TodoList</h1>
                </div>
                <div css={s.login}>
                    <button onClick={handleLoginClick}>로그인</button>
                    <button>회원가입</button>
                </div>
                <div css={s.head}>
                    <button css={s.add} onClick={handleAddClick}>계획추가</button>
                    <input css={s.time} type='month' />
                </div>
            </header>
            <div>
                <div css={s.container}>
                    {/* 전체의 dataContainer는 아래에dataContainer와 다른 css사용하세요 */}
                    <div css={s.dataContainer}>
                        <h2>전체</h2>
                        <div css={s.section}>
                            {/*새로운 Todo 등록 */}
                            <div css={s.content}>
                                <input type='checkbox' css={s.ckInput} id='ck1' />
                                <label htmlFor="ck1" css={s.ckLabel} />
                                {/* input 빼고 이모티콘 추가 */}
                                <input type='text' placeholder='내용을 입력하세요' name='textinput' onChange={addInput.onchange} onKeyDown={handleKeydown} value={addInput.textInput} />
                                <button >확인</button>
                            </div>
                            
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>데이터 들어감</li>
                                    <li><button>삭제</button></li>
                                </ul>
                            </div>
                            {/*  */}

                        </div>
                    </div>
                    <div css={s.dataContainer}>
                        <div css={s.section}>
                            <h2>미완료</h2>
                        </div>
                    </div>
                    <div css={s.dataContainer}>
                        <div css={s.section}>
                            <h2>완료</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;