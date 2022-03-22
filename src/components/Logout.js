import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.scss';
      


function Logout() {
    
    const [memId, setInputId] = useState('')
    const [memPw, setInputPw] = useState('')
 
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
    const onClickLogout = () => {
       
        axios.post('http://localhost:8080/logout/', null, {
            
        })
        .then(res => {
            console.log(res)
            console.log('res.data.userId :: ', res.data)
            
            alert('로그아웃 되었습니다')
            
        })
        .catch()
    }
 
     
 
    return(
        <div className="container">
    <button className="loginbutton" type='button' onClick={onClickLogout}>Logout</button>
        </div>
    )
}
 
export default Logout;