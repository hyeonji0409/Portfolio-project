import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Mypage.scss';
import Login from './Login';
function Mypage() {
    const sessionData = "mineItRecord";
    sessionStorage.setItem("mineSession", sessionData );
    sessionStorage.getItem("mineSession");

    
 
    return(

        
        <div className='box'>

        <h1>My Page</h1>
        <div className="buttonbox">
        <Link to='/login' ><button className="voteBtn">이력서 등록</button></Link>
        <button className="voteBtn">포트폴리오 등록</button>
        <Routes>
            <Route path='/login' element={<Login/>} />
        </Routes>

        </div>
        <br/><br/>
    <div class="voteMain ">
        
        <input type="radio" id="tab1" name="show" checked/>
        <input type="radio" id="tab2" name="show" />

        <div class="tab">
            <label for="tab1">이력서</label>
            <label for="tab2">포트폴리오</label>
        </div>

        <div class="voteContent">
            <div class="content-vote">
                <div class="voteResult">         
                     
                      	<div class="card card-2">
                          <table class="portfoliobox">
                            <td>1</td><td>이력서 제목 1</td><td>이력서 간단한 설명</td><td>깃 허브 주소</td><td>삭제</td>
                        </table>
                      	</div>
                          <div class="card card-2">
                          <table class="portfoliobox">
                            <td>1</td><td>이력서 제목 2</td><td>이력서 간단한 설명</td><td>깃 허브 주소</td><td>삭제</td>
                        </table>
                      	</div>
                          <div class="card card-2">
                          <table class="portfoliobox">
                            <td>1</td><td>이력서 제목 3</td><td>이력서 간단한 설명</td><td>깃 허브 주소</td><td>삭제</td>
                        </table>
                      	</div>
                </div>
            </div>
            <div class="content-vote"> 
                <div class="voteResult">
                
                      	<div class="card card-2">
                      	<table class="portfoliobox">
                            <td>1</td><td>포트폴리오 제목 1</td><td>포트폴리오 간단한 설명</td><td>깃 허브 주소</td><td>삭제</td>
                        </table>
                      	</div>

                          <div class="card card-2">
                      	<table class="portfoliobox">
                            <td>2</td><td>포트폴리오 제목 2</td><td>포트폴리오 간단한 설명</td><td>깃 허브 주소</td><td>삭제</td>
                        </table>
                      	</div>

                          <div class="card card-2">
                      	<table class="portfoliobox">
                            <td>3</td><td>포트폴리오 제목 3</td><td>포트폴리오 간단한 설명</td><td>깃 허브 주소</td><td>삭제</td>
                        </table>
                      	</div>
                </div>
            </div>
        </div>
    </div>
    </div>



    )
}
 
export default Mypage;