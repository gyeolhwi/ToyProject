import { css } from "@emotion/react";

export const pencil =css`
    position: absolute;
    display: block;
    transform: translateY(50%);
    margin-left: -10%;
    right: 70px;
    width: 150px;
    height: 375px;
    cursor: pointer;
    
    &:hover{
        opacity: .5;
    }
`