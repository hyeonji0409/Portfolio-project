import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
      


function Logout() {
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
 
     
 
    return(

    <button className="loginbutton" type='button' onClick={onClickLogout}>Logout</button>

    )
}
 
export default Logout;