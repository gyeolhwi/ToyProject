import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import ReactModal from 'react-modal';
import * as s from './style';
import { useRecoilState } from 'recoil';
import { todoAtom } from '../../atoms/atom';
import api from '../../apis/instance';
ReactModal.setAppElement("#root");


function Modal({ isModalOpen, setModalOpen,editTodo, setEditTodo }) {
    // const [isModalOpen, setModalOpen] = useState(false);
    const [todo, setTodo] = useRecoilState(todoAtom);


    const handleEditOnChange = (e) => {
        setEditTodo(todo => {
            return {
                ...todo,
                [e.target.name]: e.target.value
            }
        })
        console.log(editTodo);
    }

    const handleEditSubmit = () => {
        edit();
        getRender();
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    // 나중에 합쳐야하는 것
    const edit = async () => {
        let result = null;
        try {
            api.put("/todo/edit", editTodo).then(response => {
                console.log("성공");
                closeModal();
                getRender();
            });
        } catch (e) {
            console.error(e);
        }
    }
    const getRender = async () => {
        let result = null;
        try {
            const rs = await api.get("/todolist");
            result = rs.data;
            setTodo(result);
            console.log(rs.data);
        } catch (e) {
            console.error(e);
        }
        return result;
    }


    return (
        <div>
            <ReactModal
                style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        padding: '20px',
                        width: '520px',
                        height: '600px',
                        border: 'none' 
                        //transparent
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <div css={s.login}>
                    <header>
                        <div css={s.title}>
                            <h1>내용 수정</h1>
                        </div>
                    </header>

                    <div css={s.container}>
                        <input type="text" name='todoText' value={editTodo.todoText} onChange={handleEditOnChange} onKeyDown={(e) => e.key === 'Enter' ? handleEditSubmit() : 'return'} />
                    </div>
                    <div css={s.button}>
                        <button onClick={handleEditSubmit}>확인</button>
                        <button onClick={() => closeModal()}>취소</button>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}

export default Modal;