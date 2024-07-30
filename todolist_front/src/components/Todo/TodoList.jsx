import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';


function TodoList(props) {

    const navigator = useNavigate();

    const [ todo, setTodo ] = useState();

    const handleLoginClick = () => {
        navigator("/login");
    }

    const handleAddClick = () => {
    }

    const handleCompleteCheck = () => {}

    const handleTodoAddClick = () => {

    }

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
                <input css={s.time} type='month'/>
                </div>
            </header>
            <div>
                <div css={s.container}>
                    <div css={s.dataContainer}>
                        <h2>전체</h2>
                        <div css={s.section}>
                            {/*새로운 Todo 등록 */}
                            <div css={s.content}>
                                <input type='checkbox' css={s.ckInput} id='ck1' />
                                <label htmlFor="ck1" css={s.ckLabel} />
                                <input type='text' placeholder='내용을 입력하세요'/>
                                <button >수정</button>
                                <button >취소</button>
                            </div>
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