import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import axios from 'axios';
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");


function ComputerPage(props) {
    const [ isModalOpen, setModalOpen ] = useState(false);

    const [ computerDetail, setComputerDetail ] = useState({
        computerId: "",
        company: "",
        cpu: "",
        ram: "",
        ssd: ""
    });

    const [ registerComputer, setRegisterComputer ] = useState({
        company: "",
        cpu: "",
        ram: "",
        ssd: ""
    });

    const [ updateComputer, setUpdateComputer ] = useState({
        computerId: "",
        company: "",
        cpu: "",
        ram: "",
        ssd: ""
    });

    const [ params, setParams ] = useState({
        company: "",
        cpu: ""
    })

    const [ computerList, setComputerList ] = useState([]);


    const requestComputerList = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/computers`, {params});
            setComputerList(response.data);
        } catch(e) {
            console.error(e);
        }
    }

    const handleSearchInputChange = (e) => {
        setParams(p => {
            return {
                ...p,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSearchClick = () => {

        requestComputerList();

        setParams({
            company: "",
            cpu: ""
        });
    }

    const handleSelectComputerClick = async (computerId) => {
        const data = await requestGetComputer(computerId);
        if(!data) {
            setComputerDetail({
                computerId: "",
                company: "",
                cpu: "",
                ram: "",
                ssd: ""
            });
            return;
        }
        setComputerDetail(data);
    }

    const requestGetComputer = async (computerId) => {
        let responseData = null;
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/computer/${computerId}`);
            console.log(response);
            responseData = response.data;
        } catch(e) {
            console.error(e);
        }
        return responseData;
    }


    const handleRegisterInputChange = (e) => {
        setRegisterComputer(rc => {
            return {
                ...rc,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleRegisterSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/computer", registerComputer);

            if(response.status === 200) {
                alert("등록성공!");
            }

        } catch(e) {
            console.error(e);
            alert("등록실패!");
        }
    }

    const handleDeleteComputerClick = async (computerId) => {
        if(window.confirm("정말 삭제하시겠습니까?")) {
            await requestDeleteComputer(computerId);
            await requestComputerList();
            alert("삭제 완료!");
        }
    }

    const requestDeleteComputer = async (computerId) => {
        let responseData = null;

        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/computer/${computerId}`);
            responseData = response.data;
        } catch(e) {
            console.error(e);
        }

        return responseData;
    }

    const closeModal = () => {
        setModalOpen(false);
        setUpdateComputer({
            computerId: "",
            company: "",
            cpu: "",
            ram: "",
            ssd: ""
        });
    }

    const handleUpdateComputerClick = async (computerId) => {
        setModalOpen(true);
        const data = await requestGetComputer(computerId);
        setUpdateComputer(data);
    }

    const handleUpdateSubmitClick = async () => {
        await requestUpdateComputer();
        await requestComputerList();
        closeModal();
    }

    const requestUpdateComputer = async () => {
        let responseData = null;

        try {
            const response = await axios.put(`http://localhost:8080/api/v1/computer/${updateComputer.computerId}`, updateComputer);
            responseData = response.data;
        } catch(e) {
            console.error(e);
        }

        return responseData;
    }

    const handleUpdateInputChange = (e) => {
        setUpdateComputer(uc => {
            return {
                ...uc,
                [e.target.name]: e.target.value
            }
        })
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
                                <input type="text" name='ram' placeholder='RAM' onChange={handleUpdateInputChange}  />    
                        </div>
                        <div css={s.button}>
                            <button onClick={handleUpdateSubmitClick}>확인</button>
                            <button onClick={() => closeModal()}>취소</button>
                        </div>
                </div>
                    
            </ReactModal>












                <h2>목록</h2>
                <td><button onClick={() => handleUpdateComputerClick()}>수정</button></td>
          
        </div>
    );
}

export default ComputerPage;