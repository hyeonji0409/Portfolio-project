
import { useState, useRef, useCallback } from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import { useNavigate } from 'react-router-dom';
import Introduce from './components/Introduce';
import { Link, Routes, Route } from 'react-router-dom';
import Bottom from './components/Bottom';
import Logout from './components/Logout';
import Mypage from './components/Mypage';
import Portfolio from './components/Portfolio';
import PortfolioInsert from './components/PortfolioInsert';
import PortfolioiDetail from './components/PortfolioiDetail';
import TodolistDetail from './components/TodolistDetail';
import Career from './components/Career';
import PortfolioUpdate from './components/PortfolioUpdate';


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


          <div className="logo_div"><h1>Draw your PORTFOLIO</h1></div>
          <div className="link_div">
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
          <Route path='/portfolioUpdate/:portNo' element={<PortfolioUpdate/>} />
          <Route path='/portfolioDetailView/:portNo' element={<PortfolioiDetail/>} />
          <Route path='/todolist' element={<TodolistDetail />} /> 

          <Route path='/career' element={<Career />} />
        </Routes>
      </div>

      <div>
        <Bottom />
      </div>
    </>
  );
}

export default App;