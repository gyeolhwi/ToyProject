import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";


function TodoListPage(props) {
    return (
        <>
            <biv css={s.container}>
                <header css={s}>
                    <button>=</button>
                    <h1>Todo List</h1>
                    <button>로그인</button>
                    <button>회원가입</button>
                </header>
                <body css={s.Todobody}>
                    <div css={s.listContainer}>

                        <div css={s.todoListContainer}>
                            <h2>전체</h2>
                            <div css={s.list}>
                                <input type="checkbox"></input>
                                <p>텍스트</p>
                                <button>수정</button>
                                <button>삭제</button>
                            </div>
                            <div css={s.list}>
                                <input type="checkbox"></input>
                                <p>텍스트</p>
                                <button>수정</button>
                                <button>삭제</button>
                            </div>
                            <div css={s.list}>
                                <input type="checkbox"></input>
                                <p>텍스트</p>
                                <button>수정</button>
                                <button>삭제</button>
                            </div>
                            <div css={s.list}>
                                <input type="checkbox"></input>
                                <p>텍스트</p>
                                <button>수정</button>
                                <button>삭제</button>
                            </div>
                            <div css={s.list}>
                                <input type="checkbox"></input>
                                <p>텍스트</p>
                                <button>수정</button>
                                <button>삭제</button>
                            </div>
                        </div>

                        <div css={s.todoListContainer}>
                            <h2>미완료</h2>
                            <div css={s.list}>
                                <input type="checkbox"></input>
                                <p>텍스트</p>
                                <button>수정</button>
                                <button>삭제</button>
                            </div>
                        </div>

                        <div css={s.todoListContainer}>
                            <h2>완료됨</h2>
                            <div css={s.list}>
                                <input type="checkbox"></input>
                                <p>텍스트</p>
                                <button>수정</button>
                                <button>삭제</button>
                            </div>
                        </div>

                    </div>
                </body>
            </biv>
        </>
    );
}

export default TodoListPage;