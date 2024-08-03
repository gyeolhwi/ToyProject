import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../styles/sweetalert.css';

function LoginPage(props) {

    const user = {
        userId: "test",
        password: "1234"
    }
    const [userText, setUserText] = useState({
        userId: "",
        password: ""
    })
    const navigator = useNavigate();
    const handleOnChange = (e) => {
        setUserText(u => {
            return {
                ...u,
                [e.target.name]: e.target.value
            }
        })
        console.log(userText);
    }
    const handleLoginClick = () => {
        if (user.userId === userText.userId) {
            if (user.password === userText.password) {
                // Navigate("/todo");
                navigator("/todo");
            }
            else {
                Swal.fire({
                    title: "사용자정보를 확인해주세요",
                    font: "Nanumpen",
                    position: 'center',
                    width: `400`,
                    backdrop: `left top,
                    no-repeat`,
                    customClass: {
                        popup: "sweet-back-img",
                        title: "sweet-title",
                        actions: "sweet-actions"
                    }
                })
            }
        } else {
            Swal.fire({
                title: "사용자정보를 확인해주세요",
                font: "Nanumpen",
                position: 'center',
                width: `400`,
                backdrop: `left top,
                no-repeat`,
                customClass: {
                    popup: "sweet-back-img",
                    title: "sweet-title",
                    actions: "sweet-actions"
                }
            })
        }
    }


    return (
        <div css={s.ground}>
            <header>
                <div css={s.title}>
                    <h1>Login</h1>
                </div>
            </header>
            <div>
                <div css={s.container}>
                    <div css={s.box}>
                        <form css={s.login}>
                            <div css={s.names}>
                                <span>아이디</span>
                                <input type="text" name="userId" onChange={handleOnChange} value={userText.userId} onKeyPress={(e) => e.key === 'Enter' ? handleLoginClick() : "return"} />
                            </div>
                            <div css={s.names}>
                                <span>암호</span>
                                <input type="password" name="password" onChange={handleOnChange} onKeyPress={(e) => e.key === 'Enter' ? handleLoginClick() : "return"} value={userText.password} />
                            </div>
                            <button type='button' onClick={handleLoginClick} value="Submit">로그인</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LoginPage;