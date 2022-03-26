import { useNavigate } from 'react-router-dom';
import React, { useState, Component, useEffect } from "react";
import axios from 'axios';
import './PortfolioInsert.scss';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function PortfolioInsert(props) {
    let history = useNavigate();

    // state
    const [port, setPort] = useState({
        memId: '',
        portStackNo: '',
        // portNo: '',
        portTitle: '',
        portSubTitle: '',
        gitLink: '',
        portDetails: ''
        // portImages: ''
    });

    const getValue = (e) => {
        const { name, value } = e.target; // e.target에서 name과 value 추출
        setPort({
            ...port, // 기존의 port객체 복사
            [name]: value // name 키를 가진 값을 value로 설정
        });
        console.log(port);
    };

    const onReset = () => {
        setPort({
            memId: '',
            portStackNo: '',
            // portNo: '',
            portTitle: '',
            portSubTitle: '',
            gitLink: '',
            portDetails: ''
            // portImages: ''
        })
        alert("글 등록을 취소하시겠습니까?");
        history('/portfolio');
    };

    const onSubmit = (e) => {
        e.preventDefault();

       var frmData = new FormData(document.portfolioInsert);

        axios.post('http://localhost:8080/insertPortfolio/', frmData)
            .then(
                response => {
                    alert("등록 완료");
                    history('/portfolio'); // portfolio 페이지로 이동
                }
            );
    }
    
  return (
    <div className='container_portfolioInsert'>
        <div className='insertForm'>
            <h2>프로젝트를 등록해주세요</h2>
        </div>

        <form name='portfolioInsert' onSubmit={onSubmit} onReset={onReset}>
            <table className='poTable'>
                <tbody>
                <tr>
                    <th>
                        글쓴이
                    </th>
                    <td>
                         <input type='text' name="memId" id="memId" 
                         value={port.memId} onChange={getValue} maxLength="30" placeholder='제목을 입력하세요'></input>
                    </td>
                </tr>
                <tr>
                    <th>
                        제목
                    </th>
                    <td>
                         <input type='text' name="portTitle" id="portTitle" 
                         value={port.portTitle} onChange={getValue} maxLength="30" placeholder='제목을 입력하세요'></input>
                    </td>
                </tr>

                <tr>
                    <th>
                        프로젝트 설명
                    </th>
                    <td>
                        <input type='text' name="portSubTitle" id="portSubTitle" 
                        value={port.portSubTitle} onChange={getValue} maxLength="100" placeholder='프로젝트에 대해 간단히 설명해주세요'></input>
                    </td>
                </tr>

                <tr>
                    <th>
                        기술 스택
                    </th>
                    <td>
                        {/* <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={stacks}
                            sx={{ width: 300 }}
                            value={port.stackNo} onChange={onChange}
                            renderInput={(params) => <TextField {...params} label="Stack" />}
                        /> */}
                        <input type='int' name="portStackNo" id="portStackNo" 
                        value={port.portStackNo} onChange={getValue} maxLength="100" placeholder='프로젝트에 대해 간단히 설명해주세요'></input>
                    </td>
                </tr>

                <tr>
                    <th>
                        Github 주소
                    </th>
                    <td>
                        <input type='text' name="gitLink" id="gitLink" 
                        value={port.gitLink} onChange={getValue} placeholder='Github 링크를 첨부해주세요'></input>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className='editor'>
                {/* <CKEditor
                    id="portDetails"
                    editor={ ClassicEditor }
                    config={{
                        placeholder: "글을 입력해주세요"
                    }}
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        // console.log({event, editor, data});
                        setPort({
                            ...port,
                            portDetails: data
                        })
                        console.log(data);
                        // console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                       //  console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                       //  console.log( 'Focus.', editor );
                    } }
                /> */}
                <textarea type='textarea' name="portDetails" id="portDetails" 
                        value={port.portDetails} onChange={getValue} placeholder='내용을 입력해주세요'></textarea>
                <input type="file" name="file" className='uploadFile' readOnly></input>
            </div>		
            	
            {/* <input class="portBtn" type='reset' value="취소"/> */}
            <input class="portBtn" type='submit' value="등록" />
            <input class="portBtn" type='reset' value="취소"/>
      			
        </form>
    </div>
  )
}

const stacks = [
    { label: 'Java', stackNo: 1 },
    { label: 'Python', stackNo: 2 },
    { label: 'C++', stackNo: 3 },
    { label: 'Spring Boot', stackNo: 4 },
    { label: 'React', stackNo: 5 },
    { label: "JavaScript", stackNo: 6 },
    { label: 'jQuery', stackNo: 7 },
    { label: 'Node.js', stackNo: 8 },
    { label: 'Git', stackNo: 9 },
];

export default PortfolioInsert;