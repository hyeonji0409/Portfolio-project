import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='MenuBar'>
        <Link to='/' ><button className='MenuButton'>home</button></Link> &nbsp;
        <Link to='/login' ><button className='MenuButton'>login</button></Link> &nbsp;
        <Link to='/signup' ><button className='MenuButton'>signup</button></Link> &nbsp;

        {/* <hr></hr> */}
      </div>

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
