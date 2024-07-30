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
                            <label>
                                <input type="text" name="id" placeholder='이름 : ' />
                            </label>
                            <label>
                                <input type="password" name="password" placeholder='암호 : ' />
                            </label>
                            <button type='submit' value="Submit">로그인</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default LoginPage;