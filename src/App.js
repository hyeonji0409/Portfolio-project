import './App.css';
import AxiosSpring from './components/AxiosSpring';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <h2>index Page</h2>
      <Link to='/login' ><button>로그인</button></Link> &nbsp;
      <Link to='/signup' ><button>회원가입</button></Link> &nbsp;

      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        
      </Routes>
    </div>
  );
}

export default App;