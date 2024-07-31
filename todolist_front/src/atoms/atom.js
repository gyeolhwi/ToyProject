import { atom } from "recoil";


const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

export const todoAtom = atom({
    key: "todo",
    default: [{
        todoId : "",
        todoUserId:"",
        todoText:"",
        todoChkId:"",
        todoDate:""
    }]
})

export const getDate = atom({
    key:"getDate",
    default: {
        toDay : year + "-" + month
    }
})
