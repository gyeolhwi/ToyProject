import { css } from "@emotion/react";


export const ground =css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 50px;
    width: 1600px;
    height: 100%;
    background-color: #d2b48c;
    /* background-color: white;
    background-image: linear-gradient(transparent 50%, rgba(255,255,255,.5) 50%);
    background-size: 50px 50px;; */
    
`;

export const todo =css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 65px;
    background-color: white;
    margin-top: 20px;
    h1{
        display: flex;
        background-color: white;
        width: 160px;
        height: 45px;
        border: 1px solid red;
        align-items: center;
        justify-content: center;
    }
`;

export const container =css`
    display: flex;
    justify-content: space-between;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const box =css`
    display: flex;
    flex-direction: column;
    margin: 30px 40px;
    width: 400px;
    height: 600px;
    h2{
        margin: 10px 0px 20px 0px ;
        text-align: center;
        width: 400px;
        background-color: white;
    }
    p{
        margin: 0;
        height: 40px;
        width: 280px;
        background-color: #ffffff;
        text-align: left;
        padding-left: 10px;
        line-height: 2.5;
    }
    button{
        height: 40px;
        width: 50px;
        background-color: white;
    }
    background-image: -webkit-linear-gradient(top , transparent, transparent 1.76em, #bebebe 0);
    background-size: 100% 1.85em;
    border-radius: 5%;
    
`;
export const login =css`
    transform: translate(400%,-100%);
    width: 160px;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    border-right: 1px solid red;
    button {    
        border-left: 1px solid red;
        width: 80px;
    }
`;

export const content =css`
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
    button {    
        border: none;
        border-left: 1px solid red;
    }
`;

export const ckLabel =css`
    display: block;
    background-color: white;
    &::after{
        content: "❌";
    }
`;
export const ckInput =css`
    display: none;
    &:checked+label::after{
        content: "⭕";

    }
`

export const plus =css`
    background-color: white;
    width: 80px;
    border: 1px solid red;
    transform: translate(-768%,-40%);
    button {
        width: 80px;
        border: none;
    }
`;