import React, {useState, useEffect} from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Portfolio.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Portfolio() {

    // // 파라미터로 받아온 값
    // const {memNo} = useParams();

    // // state
    // const [portfolio, setPort] = useState({
    //     memNo: '',
    //     portNo: '',
    //     stackNo: '',
    //     portTitle: '',
    //     portSubTitle: '',
    //     gitLink: '',
    //     portDetails: ''
    // });

    // const [loading, setLoading] = useState(false);

    // // 서버에 요청에서 데이터 받아오기
    // // state 값 저장
    // const loadData = async () = {
    //     setLoading(true);
    //     const response = await axios.get('http://localhost:8080/detailPortfolio/' + portNo);
    //     console.log(response.data);
    //     setPort({
    //         memNo: response.data.memNo,
    //         stackNo: response.data.stackNo,
    //         portTitle: response.data.portTitle,
    //         portSubTitle: response.data.portSubTitle,
    //         gitLink: response.data.gitLink,
    //         portDetails: response.data.portDetails
    //     });
    //     setLoading(false);
    // }

    // // 렌더링할 때마다 호출
    // // 빈 배열 : loadData() 한 번만 호출
    // useEffect(() => {
    //     loadData();
    // }, []);

    return (
        <div className='wrap'>
            <div className='PortfolioComponent'>
                <div className='subHeader'>
                    <div><Link to='/' >최신순</Link></div>
                    <div><Link to='/' >오래된순</Link></div>
                    <div>검색 버튼</div>
                    <div><Link to='/portfolioInsert' >글쓰기</Link></div>
                    
                </div>
                <div className='PortfolioContents'>
                    <a className='contentBox'>
                        <div>
                            <div className='contentsImg'>
                                Image
                            </div>
                            <div className='contentsText'>
                                <div className='contentsTitle'>Title</div>
                                <div className='contentsDetail'>Detail</div>
                                <div className='contentsTag'>Tag</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio