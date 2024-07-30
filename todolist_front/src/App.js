import { Global } from '@emotion/react';
import './App.css';
import { reset } from './styles/global';
import TodoList from './components/Todo/TodoList';
import MainLayout from './components/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer/MainContainer';
import LoginPage from './pages/LoginPage';
import Pencil from './components/Pencil/Pencil';


function App() {
  return (
  <>
    <Global styles={reset}/>
    <MainLayout>
      <MainContainer>
        <Routes>
          <Route path="/" element={<TodoList/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </MainContainer>
      <Pencil />
    </MainLayout>
    

  </>
  );
}

export default App;
