<<<<<<< HEAD
import { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    },
  ]);

  // 고유 값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4); //현재 id가 3까지. nextId는 4
  // useRef를 통해 만든 객체 안의 current 값이 실제 DOM 요소를 가리킴

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 증가
    }, [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }, [todos]
  );

  // id 값이 같을 때는 규칙대로 새로운 객체 생성하지만
  // id 값이 같을 때는 처음 받아온 상태 그대로 반환
  const onToggle = useCallback(
    (id) => {
      setTodos(
        // todos.map((todo) => ({
        //   ...todo, checked: todo.id === id ? !todo.checked : todo.checked
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      )
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
=======
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Introduce from './components/Introduce';
import { Link, Routes, Route } from 'react-router-dom';
import Bottom from './components/Bottom';
import Logout from './components/Logout';
import Mypage from './components/Mypage';
import Portfolio from './components/Portfolio';
import PortfolioInsert from './components/PortfolioInsert';
import PortfolioiDetail from './components/PortfolioiDetail';
import Career from './components/Career';


function App() {
  let history = useNavigate();

    const [memId, setInputId] = useState('')
    const [memPw, setInputPw] = useState('')
 
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
        
    }
 
    const onClickLogout = () => {
        sessionStorage.removeItem("memId");

        alert('로그아웃 되었습니다')
        history('/login');   

    }
  return (
    <>
      <div className="App">
        <div className='MenuBar'>
          <Link to='/' ><button className='MenuButton'>home</button></Link> &nbsp;
          <Link to='/introduce' ><button className='MenuButton'>introduce</button></Link> &nbsp;
          <Link to='/login' ><button className='MenuButton'>login</button></Link> &nbsp;
          <Link to='/signup' ><button className='MenuButton'>signup</button></Link> &nbsp;
          <Link to='/mypage' ><button className='MenuButton'>마이페이지</button></Link> &nbsp;
          <Link to='/logout' ><button className='MenuButton'>로그아웃</button></Link> &nbsp;
          <Link to='/portfolio' ><button className='MenuButton'>portfolio</button></Link> &nbsp;
          <Link to='/career' ><button className='MenuButton'>이력</button></Link> &nbsp;

          {/* <hr></hr> */}
        </div>



        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/Introduce' element={<Introduce />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolioInsert' element={<PortfolioInsert/>} />
          <Route path='/portfolioDetailView/:portNo' element={<PortfolioiDetail/>} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </div>

      <div>
        <Bottom />
      </div>
    </>
>>>>>>> 163370c83417d0aa5b8e1784f959da508f06edba
  );
}

export default App;