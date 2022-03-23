import React, {useState, useEffect} from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Portfolio.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PortfolioListItem from './PortfolioListItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';

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

   const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div className='wrap'>
            <div className='pageTitle'>
                <h2>Portfolio</h2>
            </div>
            <div className='PortfolioComponent'>
                <div className='subHeader'>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 100, minHeight: 40 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">정렬기준</InputLabel>
                            <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            label="정렬기준"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>수정일</MenuItem>
                            <MenuItem value={21}>생성일</MenuItem>
                            <MenuItem value={31}>이름순</MenuItem>
                            <MenuItem value={41}>오름차순</MenuItem>
                            <MenuItem value={51}>내림차순</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div id='writeBtn'>
                        <Link to='/portfolioInsert'><Button variant='outlined' size='medium'>글쓰기</Button></Link>
                    </div>
                </div>
                <div className='portCard'>
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