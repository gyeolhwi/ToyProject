import { atom } from "recoil";


const date = new Date();
const year = date.getFullYear();
const month = date.getMonth()+1;
const toDay = year + "-" + (month > 9 ? "" : "0") + month;

export const todoAtom = atom({
    key: "todo",
    default: [{
        todoId : "",
        todoUserId:"",
        todoText:"",
        todoChkId:"",
        todoDate:""
    }
]})

export const getDate = atom({
    key:"getDate",
    default: {
        todoDate : toDay
    }
})
