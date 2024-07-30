import { css } from "@emotion/react";

export const layout =css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 50px;
    width: 1600px;
    height: 100%;
`;

export const title =css`
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
        font-family: "Nanumpen";
        font-size: 40px;
        width: 160px;
        height: 45px;
        border: 1px solid red;
        align-items: center;
        justify-content: center;
    }
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

export const head =css`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    button {
        transform: translate(-778%);
    }
    input {
        padding-bottom: 5px;
        font-family: "NanumBarunpenR";
        font-size: 20px;
        text-align: end;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid red;
        width: 130px;
        transform: translate(468%);
        &:focus {
            outline:none;
        }
    }
`;

export const add =css`
    width: 80px;
    border: 1px solid red;
`;

export const time =css`
`;

export const container =css`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const dataContainer =css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    margin: 30px 40px;
    width: 400px;
    height: 600px;
    h2{
        font-family: "NanumBarunpenB";
        margin: 10px 0px 20px 0px ;
        text-align: center;
        width: 400px;
        background-color: white;
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

export const section =css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    overflow-y: auto;
    ::-webkit-scrollbar {
            display:none;
        }
`

export const content =css`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid red;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 10px 0px 10px 0px;
    input {
        margin: 0;
        height: 40px;
        width: 280px;
        background-color: transparent;
        text-align: left;
        border: none;
        padding-left: 10px;
        line-height: 2.5;
    }
    p {
        margin: 0;
        height: 40px;
        width: 280px;
        background-color: transparent;
        text-align: left;
        border: none;
        padding-left: 10px;
        line-height: 2.5;
    }
    button {
        height: 30px;
        border: 1px solid red;
        margin-right: 3px;
    }
    &:nth-of-type(1) {
        margin-top: 2px;
    }
`;

export const ckLabel =css`
    display: block;
    background-color: transparent;
    &::after{
        content: "❌";
    }
`;
export const ckInput =css`
    display: none;
    background-color: transparent;
    &:checked+label::after{
        content: "⭕";
    }
`