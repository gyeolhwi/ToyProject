import { Global } from '@emotion/react';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import { reset } from './styles/global';

function App() {
  return (
  <biv class="ground">
    <Global styles={reset} />
      <header>
      <h1>Todo List</h1>
      <p>
      <button>로그인</button>
      <button>회원가입</button>
      </p>
    </header>
    <body>
      <div class="entire">
        <h2>전체</h2>
        <input type="checkbox"></input>
        <input type='text'></input>
        <button>수정</button>
        <button>삭제</button>
      </div>
      <div class="Complete"> 
        <h2>완료</h2>
        <input type='text'
        name=""/>
        <button>1</button>
        <button>2</button>
      </div>
      <div>
        <h2 class="Incomplete">미완료</h2>
        <input type='text'
        name=""/>
        <button>A</button>
        <button>B</button>s
      </div>
    </body>
  </biv>
  );
}

export default App;
