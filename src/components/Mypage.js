import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Mypage.scss';
import PortfolioInsert from './PortfolioInsert';
import axios from 'axios';
import PortfolioListItem from './PortfolioListItem';
import './Portfolio.scss';

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
        <div className='wrap'>
        <h1>{memId}My Page</h1>
        <div className="buttonbox">
        <Link to='/portfolioInsert' ><button className="voteBtn">포트폴리오 등록</button></Link> &nbsp;
        <Link to='/career' ><button className="voteBtn">이력서 등록</button></Link> &nbsp;

        <Routes>
        <Route path='/portfolioInsert' element={<PortfolioInsert/>} />
        </Routes>

        </div>
        
        <br/><br/>

        
        


            <h1>포트폴리오</h1>
            <div className='portCard'>
                     {
                        data && data.map(function (port, i) {
                            return <PortfolioListItem port={port} key={i} />
                        })
                    }
                </div>

                  {/* <div class="card card-2">
                          <table class="portfoliobox">
                            <td>1</td><td>이력서 제목 2</td><td>이력서 간단한 설명</td><td>깃 허브 주소</td><td>삭제</td>
                        </table>
                      	</div> */}
                          
    




                          </div>
    )
}
 
export default Mypage;