import { css } from "@emotion/react";

export const login =css`
    margin: 40px 0px 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 400px;
    border-top: 30px solid #EB3232;
    box-shadow: 0px 5px 5px #dbdbdb;
    background-color: #fdfaf4;
    background:
		linear-gradient(to bottom, transparent 18px, #ff00002e 18px) 0 0 / 100vw 20px repeat-y,
		linear-gradient(to right, transparent 18px, #ff00002e 18px) 0 0 / 20px 100vh repeat-x
	    white;
`;

export const title =css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 65px;
    h1{
        display: flex;
        font-family: "Nanumpen";
        font-size: 40px;
        width: 300px;
        height: 45px;
        align-items: center;
        justify-content: center;
    } 
`;

export const container =css`
    margin: 10px;
    box-sizing: border-box;
    input {   
        border-top: 3px solid black;
        border-left: none;
        border-right: none;
        font-family: "Nanumpen";
        font-size: 25px;
        font-weight: bold;
        border-bottom: 3px solid black;
        width: 380px;
        height: 200px;
        background: none;
        cursor: text;
    }
    `;
        
export const button =css`
    button{    
    font-family: "Nanumpen";
    font-size: 20px;
    font-weight: bold;
    width: 190px;
    border: none;
    border-bottom: 3px solid black;
    background: transparent;
    &:hover{
        color: #9e0000;
    }
    &:active{
        color: #ff0000;
    }
    }
 `;
