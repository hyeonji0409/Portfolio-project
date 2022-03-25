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
          <div className="logo_div"><h1>Draw your PORTFOLIO</h1></div>
          <div className="link_div">
            <Link to='/' ><button className='MenuButton'>home</button></Link> &nbsp;
            <Link to='/introduce' ><button className='MenuButton'>introduce</button></Link> &nbsp;
            <Link to='/login' ><button className='MenuButton'>login</button></Link> &nbsp;
            {/* <Link to='/signup' ><button className='MenuButton'>signup</button></Link> &nbsp; */}
            <Link to='/mypage' ><button className='MenuButton'>mypage</button></Link> &nbsp;
          <button className='MenuButton' onClick={onClickLogout}>logout</button> &nbsp;
            <Link to='/portfolio' ><button className='MenuButton'>portfolio</button></Link> &nbsp;
            <Link to='/career' ><button className='MenuButton'>career</button></Link> &nbsp;
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
          <Route path='/portfolioInsert' element={<PortfolioInsert />} />
          <Route path='/portfolioDetailView/:portNo' element={<PortfolioiDetail />} />
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