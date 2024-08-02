import { Global } from '@emotion/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import MainLayout from './components/MainLayout/MainLayout';
import Modal from './components/Modal/Modal';
import Pencil from './components/Pencil/Pencil';
import TodoList from './components/Todo/TodoList';
import LoginPage from './pages/LoginPage/LoginPage';
import Mainpage from './pages/Mainpage/Mainpage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { reset } from './styles/global';


function App() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
  <>
    <Global styles={reset}/>
    <MainLayout>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Mainpage/>} />
          <Route path="/todo" element={<TodoList/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/test" element={<Modal/>} />
        </Routes>
      </MainContainer>
      {
        !pathname.includes("/todo") && <Pencil />
      }
    </MainLayout>
    

  </>
  );
}

export default App;
