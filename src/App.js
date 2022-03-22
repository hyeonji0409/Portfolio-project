import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Link, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import PortfolioInsert from './components/PortfolioInsert';
import {Axios} from 'axios';

function App() {
  return (
    <div className="App">
      <h2>index Page</h2>
      <Link to='/login' ><button>로그인</button></Link> &nbsp;
      <Link to='/signup' ><button>회원가입</button></Link> &nbsp;
      <Link to='/portfolio' >Portfolio</Link> &nbsp;


      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/portfolioInsert' element={<PortfolioInsert/>} />
        
      </Routes>
    </div>
  );
}

export default App;