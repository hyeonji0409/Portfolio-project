import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Mypage.scss';
import PortfolioInsert from './PortfolioInsert';
import axios from 'axios';
import PortfolioListItem from './PortfolioListItem';

function Mypage(props) {
    let history = useNavigate();
    const [memId, setInputId] = useState('')
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    
    
    
    const[data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
 
    const loadData = async () => {
        setLoading(true);
        var memId = sessionStorage.getItem("memId");
        if (memId === null) {
            alert("로그인하세요");
            history('/login'); // 메인 화면으로 이동
        }
        const response = await axios.get('http://localhost:8080/getAllPortfolio/'+memId);
        console.log(memId);
        setData(response.data.portList);
        setLoading(false);
    }
 
    useEffect(() => {
        loadData();
    }, []);

    return(
        <div className='box'>
                <h1>{memId}</h1>
        <h1>My Page</h1>
        <div className="buttonbox">
        <Link to='/portfolioInsert' ><button className="voteBtn">포트폴리오 등록</button></Link> &nbsp;
        <button className="voteBtn">이력서 등록</button>
        <Routes>
        <Route path='/portfolioInsert' element={<PortfolioInsert/>} />
        </Routes>

        </div>
        <br/><br/>
    <div class="voteMain ">
        
        <input type="radio" id="tab1" name="show" checked/>
        <input type="radio" id="tab2" name="show" />

        <div class="tab">
            <label for="tab1">포트폴리오</label>
            <label for="tab2">이력서</label>
        </div>

        <div class="voteContent">
            <div class="content-vote">
                <div class="voteResult">         
                     
 
                     {
                        data && data.map(function (port, i) {
                            return <PortfolioListItem port={port} key={i} />
                        })
                    }
                </div>
             </div>
                          {/* <div class="card card-2">
                          <table class="portfoliobox">
                            <td>1</td><td>이력서 제목 2</td><td>이력서 간단한 설명</td><td>깃 허브 주소</td><td>삭제</td>
                        </table>
                      	</div> */}
                          
    
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