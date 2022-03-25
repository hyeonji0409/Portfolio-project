import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PortfolioInsert.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function PortfolioiDetail(props) {
    let history = useNavigate();

    const { portNo } = useParams();

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

        <form className='portfolioInsert' name='portfolioInsert' >
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
                {port.portDetails}
            </div>		
            	
            <input class="portBtn" type='reset' value="취소"/>
            <input class="portBtn" type='submit' value="등록"/>
      			
        </form>
    </div>
  )
}

export default PortfolioiDetail