import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import pencil from '../../assets/img/pencil.png'

function Pencil(props) {
    return (
        <>
            <img css={s.pencil} src={pencil} alt='pencil'/>
        </>
    );
}

export default Pencil;