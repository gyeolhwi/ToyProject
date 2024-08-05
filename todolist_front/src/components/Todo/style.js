import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 50px;
    width: 100%;
    height: 100%;

    header{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-direction: column;
        width: 1440px;
    }
`;
export const headerEnd = css`
    display: flex;
    flex-direction: column;
    width:100%;
    /* justify-content: center; */
    align-items: end;
    
button {
        font-family: "NanumBarunpenB";
        font-size: 15px;
        border: 1px solid red;
        width: 80px;
    }
`;

export const title = css`
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

export const login = css`
    transform: translate(400%,-100%);
    width: 160px;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    border-right: 1px solid red;
    button {
        font-family: "NanumBarunpenB";
        font-size: 15px;
        border-left: 1px solid red;
        width: 80px;
    }
`;

export const time = css`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    padding-bottom: 5px;
    font-family: "NanumBarunpenR";
    font-size: 20px;
    text-align: end;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid red;
    width: 140px;
    /* transform: translate(468%); */
    &:focus {
        outline:none;
    }
`;

export const container = css`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const dataContainer = css`
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
// 추가했습니다 확인 후 수정해주세요
export const successDataContainer = css`
    display: flex;
    flex-direction: row;
    width: 350px;
    margin: 5px 0px;
    padding: 4px 0px;
    font-family: "NanumGyuriDiary";
    font-weight: bold;
    font-size: 20px;
    color: black;
    box-shadow: 3px 5px 5px #dbdbdb;
    
    ul{
        display: flex;
        width: 100%;
    }
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 0px;
        button {
            font-family: "NanumGyuriDiary";
            font-weight: bold;
            font-size: 18px;
            color: red;
            text-decoration: underline;
            text-decoration-style: double;
            text-underline-offset: 8px;
            height: 32px;
            width: 40px;
            padding: 5px 0px;
            margin-right: 5px;
            background-color: transparent;
            border: none;
            
        }
        button:nth-of-type(1){
            margin: 0;
        }
    }
    li:nth-of-type(2){
        margin: 0px 12px;
        width: 300px;
        align-content: center;
        text-align: center;
    }
`;
export const chkBox = css`
    label::after{
        content: "🤍";
    }
    input{
        display: none;
    }
    input:checked + label::after{
        content: "💗";
    }
`;
// ----------------------------------------

export const section = css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    div:nth-of-type(2n-1) {
        border-left: 30px solid #fdc3ff;
        background-color: #ffe0fd;
    }
    div:nth-of-type(2n) {
        border-left: 30px solid #fcfca1;
        background-color: #fafad2;
    }
    div:nth-of-type(3n) {
        border-left: 30px solid #a1befc;
        background-color: #d2e5fa;
    }
    ::-webkit-scrollbar {
            display:none;
        }
`;

export const content = css`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid red;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 10px 0px 10px 0px;
    input {
        justify-content: center;
        align-items: center;
        margin: 0;
        margin-right: 5px;
        height: 40px;
        width: 280px;
        background-color: transparent;
        text-align: left;
        border: none;
        padding: 5px 0px 5px 10px;
        line-height: 2.5;
        font-family: "NanumGyuriDiary";
        font-weight: bold;
        font-size: 18px;
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
        margin: 0px 3px;
        font-family: "NanumGyuriDiary";
        font-weight: bold;
        font-size: 20px;
        color: red;
        height: 50px;
        width: 50px;
        background-color: transparent;
        border: none;
        padding: 5px 0px;
    }
    &:nth-of-type(1) {
        margin-top: 2px;
    }
`;

export const ckLabel = css`
    display: block;
    background-color: transparent;
    &::after{
        content: "📌";
    }
`;
export const ckInput = css`
    display: none;
    background-color: transparent;
    &:checked+label::after{
        content: "⭕";
    }
`