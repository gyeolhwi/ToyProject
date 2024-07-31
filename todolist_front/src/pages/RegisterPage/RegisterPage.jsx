import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function RegisterPage(props) {
    return (
        <div css={s.ground}>
            <header>
                <div css={s.title}>
                    <h1>Register</h1>
                </div>
            </header>
            <div>
                <div css={s.container}>
                    <div css={s.box}>
                    <form css={s.register}>
                        <div css={s.names}>
                                <span>이름</span>
                                <input type="text" name="username"  />
                        </div>
                        <div css={s.names}>
                                <span>아이디</span>
                                <input type="text" name="id" />
                        </div>
                        <div css={s.names}>
                                <span>암호</span>
                                <input type="password" name="password"/>
                        </div>
                        <div css={s.names}>
                                <span>암호확인</span>
                                <input type="password" name="password" />
                        </div>
                            <button type='submit' value="Submit">회원가입</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
