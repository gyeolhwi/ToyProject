import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import axios from 'axios';
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");


function ComputerPage(props) {
    const [ isModalOpen, setModalOpen ] = useState(false);
    const handleUpdateComputerClick = () =>{
        setModalOpen(true);
    }
    const closeModal = () =>{
        setModalOpen(false);
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
                        width: '800px',
                        height: '600px',
                        backgroundColor: '#fafafa',
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
                                <input type="text" name='ram' placeholder='RAM'   />    
                        </div>
                        <div css={s.button}>
                            <button >확인</button>
                            <button onClick={() => closeModal()}>취소</button>
                        </div>
                </div>
                    
            </ReactModal>













                <td><button onClick={() => handleUpdateComputerClick()}>수정</button></td>
          
        </div>
    );
}

export default ComputerPage;