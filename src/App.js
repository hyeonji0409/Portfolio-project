import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Link, Routes, Route } from 'react-router-dom';

import Mypage from './components/Mypage';

import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
      <h2>index Page</h2>
      <Link to='/login' ><button>로그인</button></Link> &nbsp;
      <Link to='/signup' ><button>회원가입</button></Link> &nbsp;
      <Link to='/mypage' ><button>마이페이지</button></Link> &nbsp;
      <Link to='/logout' ><button>로그아웃</button></Link> &nbsp;
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/mypage' element={<Mypage/>} />
        <Route path='/logout' element={<Mypage/>} />
      </Routes>
    </div>
  );
}

export default App;
