import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import ReactModal from 'react-modal';
import * as s from './style';
import { useRecoilState } from 'recoil';
import { getDate, todoAtom } from '../../atoms/atom';
import api from '../../apis/instance';
import Swal from 'sweetalert2';
ReactModal.setAppElement("#root");


function Modal({ isModalOpen, setModalOpen, editTodo, setEditTodo }) {
    // const [isModalOpen, setModalOpen] = useState(false);
    const [todo, setTodo] = useRecoilState(todoAtom);
    const [today, setToDay] = useRecoilState(getDate);

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
        // getRender();
        getRenderDate();
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    // 나중에 합쳐야하는 것
    const edit = async () => {
        let result = null;
        try {
            api.put("/todo/edit", editTodo).then(response => {
                Swal.fire({
                    title: "수정 완료!",
                    font: "Nanumpen",
                    position: 'top',
                    width: `400`,
                    backdrop: `left top,
                    no-repeat`,
                    customClass: {
                        popup: "sweet-back-img",
                        title: "sweet-title",
                        actions: "sweet-actions"
                    },
                }).then(rs => {
                    if (rs.isConfirmed) {
                        closeModal();
                        getRenderDate();
                    }
                })
            });
        } catch (e) {
            console.error(e);
        }
        return
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
    const getRenderDate = async () => {
        let result = null;
        try {
            const rs = await api.get(`/todolist`, {
                params: {
                    month: today.todoDate
                }
            });
            result = rs.data;
            setTodo(result);
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
                        border: 'none',
                        background: 'none'
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
                        <input type="text" name='todoText' value={editTodo.todoText} onChange={handleEditOnChange} onKeyDown={(e) => e.key === 'Enter' ? handleEditSubmit() : 'return'} autoFocus />
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