import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';

function Mainpage(props) {

    const navigator = useNavigate();

    const handleLoginClick = (e) => {
        navigator(e.target.name);
    }
    
    return (
        <div css={s.layout}>
            <div>
                <div css={s.title}>
                    <h1>HOME</h1>
                </div>
                <div css={s.container}> 
                    <ul css={s.successDataContainer}>
                        <li><button name='/login' onClick={handleLoginClick}>&nbsp;로그인&nbsp;</button></li>
                        <li><button name='/register' onClick={handleLoginClick}>&nbsp;회원가입&nbsp;</button></li>
                    </ul>
                    <div css={s.topContainer}></div>
                    <div css={s.dataContainer}></div>
                </div>  
            </div>
        </div>
    );
}

export default Mainpage;