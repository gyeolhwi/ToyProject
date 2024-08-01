import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import pencil from '../../assets/img/pencil.png'
import { useNavigate } from 'react-router-dom';

function Pencil(props) {
    
    const navigator = useNavigate();

    const homeClick = () => {
        navigator("/");
    }

    return (
        <>
            <img css={s.pencil} src={pencil} alt='pencil' title="홈으로" onClick={homeClick}/>
        </>
    );
}

export default Pencil;