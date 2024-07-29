import { Global } from '@emotion/react';
import './App.css';
import TodoListPage from './components/TodoList/TodoListPage';
import { reset } from './styles/global';
import TodoList from './components/Todo/TodoList';


function App() {
  return (
  <>
    <Global styles={reset}/>
    
    {/* <TodoListPage/> */}
    <TodoList/>

  </>
  );
}

export default App;
