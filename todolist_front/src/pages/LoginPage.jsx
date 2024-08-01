import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function LoginPage(props) {
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
                                <span>이름</span>
                                <input type="text" name="id"  />
                            </div>
                            <div css={s.names}>
                                <span>암호</span>
                                <input type="password" name="password" />
                            </div>
                            <button type='submit' value="Submit">로그인</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default LoginPage;