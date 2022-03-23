import React, {useState, useEffect} from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Portfolio.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PortfolioListItem from './PortfolioListItem';

function Portfolio(props) {

   // state
   const[data, setData] = useState([]);
   const [loading, setLoading] = useState(false);

   const loadData = async () => {
       setLoading(true);
       const response = await axios.get('http://localhost:8080/getAllPortfolio');
       console.log(response.data);
       setData(response.data.portList);
       setLoading(false);
   }

   useEffect(() => {
       loadData();
   }, []);

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
                     {
                        data && data.map(function (port, i) {
                            return <PortfolioListItem port={port} key={i} />
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio