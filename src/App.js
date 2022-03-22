import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import Introduce from './components/Introduce';
import { Link, Routes, Route } from 'react-router-dom';

import Mypage from './components/Mypage';

import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
      <div className='MenuBar'>
        <Link to='/' ><button className='MenuButton'>home</button></Link> &nbsp;
        <Link to='/introduce' ><button className='MenuButton'>introduce</button></Link> &nbsp;
        <Link to='/login' ><button className='MenuButton'>login</button></Link> &nbsp;
        <Link to='/signup' ><button className='MenuButton'>signup</button></Link> &nbsp;
        <Link to='/mypage' ><button className='MenuButton'>마이페이지</button></Link> &nbsp;
        <Link to='/logout' ><button className='MenuButton'>로그아웃</button></Link> &nbsp;

        {/* <hr></hr> */}
      </div>

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Introduce' element={<Introduce />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/logout' element={<Mypage />} />
      </Routes>
    </div>
  );
}

export default App;
