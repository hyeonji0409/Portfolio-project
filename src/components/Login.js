import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.scss';



function Login() {
    let history = useNavigate();

    const [memId, setInputId] = useState('')
    const [memPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.frmLogin);

        axios.post('http://localhost:8080/login/', frmData)
            .then(
                res => {
                    if (res.data === "ok") {
                        alert("로그인 성공");
                        
                        history('/'); // 메인 화면으로 이동
                    } else {
                        // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.''
                        alert('로그인 실패');
                    }

                }
            );
    }


    return (
        <div className="container">
            <div className="container1">
                <div className="loginform">
                    <h2>Login</h2>
                    <form name="frmLogin" onSubmit={onSubmit}>
                        <div className="login_id">
                            <label htmlFor='memId'>ID : </label>
                            <input id="memId" type='text' name='memId' value={memId} placeholder="ID" onChange={handleInputId} />
                        </div>
                        <div className="login_pw">
                            <label htmlFor='input_pw'>PW : </label>
                            <input id="memPw" type='password' name='memPw' value={memPw} placeholder="Password" onChange={handleInputPw} />
                        </div>
                        <div className="buttons">
                            <input className="loginbutton" type="submit" value="login" />
                            {/* <button class="loginbutton" type='button' onClick={onClickLogin}>Login</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;