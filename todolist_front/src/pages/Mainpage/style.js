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
    transform: translate(85%, 150%);
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

export const container =css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: space-between;
    padding-top: 150px;
    background-color: #FFA500 ;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const topContainer = css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    margin: 0px 40px;
    width: 400px;
    height: 50px;
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
`;

export const dataContainer =css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    margin: 0px 40px 40px 40px;
    width: 400px;
    height: 400px;
    background-image: -webkit-linear-gradient(top , transparent, transparent 1.76em, #f7f7f7 0);
    background-size: 100% 1.85em;
    border-radius: 5%;
`;

export const successDataContainer=css`
    display: flex;
    flex-direction: co;
    width: 350px;
    margin: 5px 0px;
    padding: 4px 0px 4px 0px;
    font-family: "NanumGyuriDiary";
    font-weight: bold;
    font-size: 20px;
    color: black;
    
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
            font-size: 25px;
            color: black;
            text-underline-offset: 8px;
            height: 32px;
            width: 80px;
            padding: 5px 0px;
            margin-right: 5px;
            background-color: transparent;
            border: none;
            
        }
        button:nth-of-type(1){
            margin: 0;
        }
    }
    li:nth-of-type(1){
        margin: 0px 12px;
        padding-left: 60px;
        width: 300px;
        align-content: center;
        text-align: center;
    }
    button:hover{
        color: #9e0000;
    }
    button:active {
        color: red;
    }

`;