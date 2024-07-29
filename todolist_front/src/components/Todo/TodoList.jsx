import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FaCheck } from "react-icons/fa";


function TodoList(props) {
    return (
        <div css={s.ground}>
            <header>
                <div css={s.todo}>
                <h1>TodoList</h1>
                </div>
                <div css={s.login}>
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>
                <div css={s.plus}>
                    <button>추가하기</button>
                </div>
            </header>
            <div>
                <div css={s.container}>
                    <div css={s.box}>
                        <h2>전체</h2>
                        <div css={s.content}>
                            <input type='checkbox' css={s.ckInput} id='ck1' />
                            <label for="ck1" css={s.ckLabel} />
                            <p>텍스트박스</p>
                            <button>수정</button>
                            <button>삭제</button>
                        </div>
                    </div>
                    <div css={s.box}>
                        <h2>미완료</h2>
                        <div css={s.content}>
                            <input type='checkbox'/>
                            <p>텍스트박스</p>
                            <button>수정</button>
                            <button>삭제</button>
                        </div>
                    </div>
                    <div css={s.box}>
                        <h2>완료</h2>
                        <div css={s.content}>
                            <input type='checkbox'/>
                            <p>텍스트박스</p>
                            <button>수정</button>
                            <button>삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;