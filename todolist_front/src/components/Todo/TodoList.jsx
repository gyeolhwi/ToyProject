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
                                <input type='text' placeholder='내용을 입력하세요' name='textinput' onChange={addInput.onchange} onKeyDown={handleKeydown} value={addInput.textInput} />
                                <button >확인</button>
                            </div>
                        {/* section은 스크롤용 */}
                        <div css={s.section}>
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>글자수</li>
                                    <li>
                                    <button>&nbsp;수정&nbsp;</button>
                                    <button>&nbsp;삭제&nbsp;</button>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>글자수</li>
                                    <li>
                                    <button>&nbsp;수정&nbsp;</button>
                                    <button>&nbsp;삭제&nbsp;</button>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>글자수</li>
                                    <li>
                                    <button>&nbsp;수정&nbsp;</button>
                                    <button>&nbsp;삭제&nbsp;</button>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>글자수</li>
                                    <li>
                                    <button>&nbsp;수정&nbsp;</button>
                                    <button>&nbsp;삭제&nbsp;</button>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>글자수</li>
                                    <li>
                                    <button>&nbsp;수정&nbsp;</button>
                                    <button>&nbsp;삭제&nbsp;</button>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>글자수</li>
                                    <li>
                                    <button>&nbsp;수정&nbsp;</button>
                                    <button>&nbsp;삭제&nbsp;</button>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>글자수</li>
                                    <li>
                                    <button>&nbsp;수정&nbsp;</button>
                                    <button>&nbsp;삭제&nbsp;</button>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>글자수</li>
                                    <li>
                                    <button>&nbsp;수정&nbsp;</button>
                                    <button>&nbsp;삭제&nbsp;</button>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
                            {/* 추가한 부분 */}
                            <div css={s.successDataContainer}>
                                <ul>
                                    <li>글자수</li>
                                    <li>
                                    <button>&nbsp;수정&nbsp;</button>
                                    <button>&nbsp;삭제&nbsp;</button>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
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