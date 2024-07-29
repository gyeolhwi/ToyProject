import { css } from "@emotion/react";

export const Todobody =css`
        margin: 50px 0 0 0;

        width:100%;
    `;

export const container =css`
    display: flex;
    flex-direction: column;
    align-items : center;
    margin: 50px auto;
    /* transform: translate(50%,50%); */
`;


export const listContainer =css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        /* justify-content: space-around; */
`;


export const todoListContainer = css`
        width: 450px;
        height: 650px;
        border: 1px solid black;

        h2{
            margin: 20px 0 30px 60px;
        }
`;

export const list =css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    p{  
        margin: 0 50px;
        width: 150px;
        text-align: center;
        line-height: 2;

    }

`;