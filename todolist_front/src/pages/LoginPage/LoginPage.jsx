import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../styles/sweetalert.css';

function LoginPage(props) {
 
    Swal.fire({
        title: "로그인 성공!!",
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
                                <input type="text" name="id"  />
                            </div>
                            <div css={s.names}>
                                <span>암호</span>
                                <input type="password" name="password" />
                            </div>
                            <button type='button' value="Submit"><Link to="/todo" >로그인</Link></button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default LoginPage;