import { css } from "@emotion/react";

export const title =css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 65px;
    background-color: white;
    margin: 20px 0px 65px 0px;
    h1{
        display: flex;
        background-color: white;
        font-family: "Nanumpen";
        font-size: 40px;
        width: 130px;
        height: 45px;
        border: 1px solid red;
        align-items: center;
        justify-content: center;
    }
`;

export const ground =css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    margin: 0 50px;
    width: 1600px;
    height: 100%;
`;

export const container =css`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const box =css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    margin: 30px 40px;
    width: 400px;
    height: 420px;
    overflow-y: auto;
    background-image: -webkit-linear-gradient(top , transparent, transparent 1.76em, #bebebe 0);
    background-size: 100% 1.85em;
    border-radius: 5%;
`;

export const register =css`
    margin: 40px 0px 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 380px;
    border-top: 30px solid #fcfca1;
    background-color: #fafad2;
    box-shadow: 0px 5px 5px #dbdbdb;
    button {
        width: 280px;
        height: 40px;
        margin: 10px 0px 40px 0px;
        font-family: "Nanumpen";
        font-size: 20px;
        color: #696969;
        border: none;
        border-bottom: 1px dashed #dbdbdb;
        background: transparent;
        &:hover{
            color: #9e0000;
        }
        &:active{
            color: #ff0000;
        }
    }
`;

export const names =css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    span {
        width: 60px;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "Nanumpen";
        font-size: 22px;
        background-color: #fafad2;
        }
    input {
        width: 250px;
        height: 40px;
        border: none;
        border-bottom: 1px dashed #dbdbdb;
        margin: 10px 0px 10px 0px;
        font-family: "Nanumpen";
        font-size: 22px;
        background: transparent;
        }
    
`; 