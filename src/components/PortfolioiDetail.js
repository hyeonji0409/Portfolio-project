import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './PortfolioInsert.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function PortfolioiDetail(props) {
    let history = useNavigate();

    const { portNo } = useParams();

    const onDeleteItem = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            console.log(portNo);
            axios.get('http://localhost:8080/deletePortfolio/' + portNo)
                .then(
                    () => {
                        history('/portfolio');
                        window.location.reload();
                    }
                ).catch(err => console.log(err));
        }
    }

    const onUpdateItem = () => {
        if(window.confirm("수정하시겠습니까?")){
            history('/portfolioUpdate/' + portNo);
            
            //window.location.reload();
        }
    }

    // state
    const [port, setPort] = useState({
        memId: '',
        portStackNo: '',
        portNo: '',
        portTitle: '',
        portSubTitle: '',
        gitLink: '',
        portDetails: '',
        portImages: '',
        stackName: ''
    });

    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/portfolioDetailView/' + portNo);
        console.log(response.data.portNo);

        setPort({
            memId: response.data.memId,
            portStackNo: response.data.portStackNo,
            portNo: response.data.portNo,
            portTitle: response.data.portTitle,
            portSubTitle: response.data.portSubTitle,
            gitLink: response.data.gitLink,
            portDetails: response.data.portDetails,
            portImages: response.data.portImages,
            stackName: response.data.stackName
        });
        setLoading(false);
    }

    useEffect( () => {
        loadData();
    }, []);

    

  return (
    <div className='container_portfolioInsert'>
        <div className='insertForm'>
            <h2>{port.memId}'s Project</h2>
        </div>

        <div className='portfolioInsert' name='portfolioInsert' >
            <table className='poTable'>
                <tr>
                    <th>
                        제목
                    </th>
                    <td>
                         {port.portTitle}
                    </td>
                </tr>

                <tr>
                    <th>
                        프로젝트 설명
                    </th>
                    <td>
                       {port.portSubTitle}
                    </td>
                </tr>

                <tr>
                    <th>
                        기술 스택
                    </th>
                    <td>
                       {port.stackName}
                    </td>
                </tr>

                <tr>
                    <th>
                        Github 주소
                    </th>
                    <td>
                        {port.gitLink}
                    </td>
                </tr>
            </table>
            <div className='editor'>
                <textarea value={port.portDetails} readOnly></textarea>
            </div>		
            	
            <button className='MenuButton' onClick={onUpdateItem}>수정</button>
            <button className='MenuButton' onClick={onDeleteItem}>삭제</button>
            </div>
    </div>
  )
}

export default PortfolioiDetail