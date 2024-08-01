import { Global } from '@emotion/react';
import './App.css';
import { reset } from './styles/global';
import TodoList from './components/Todo/TodoList';
import MainLayout from './components/MainLayout/MainLayout';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainContainer from './components/MainContainer/MainContainer';
import LoginPage from './pages/LoginPage';
import Pencil from './components/Pencil/Pencil';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Mainpage from './pages/Mainpage/Mainpage';


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
          <Route path="/test" element={<RegisterPage/>} />
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
