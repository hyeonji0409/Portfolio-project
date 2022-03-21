import { useNavigate } from 'react-router-dom';
import React , { useState, Component }from "react";
import axios from 'axios';
import './PortfolioInsert.scss';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function PortfolioInsert() {
    
  return (
    <div className='container_portfolioInsert'>
        <div className='insertForm'>
            <h2>Insert Your Project</h2>
        </div>

        <form className='portfolioInsert'>
            <table className='poTable'>
                <tr>
                    <th>
                        제목
                    </th>
                    <td>
                         <input type='text' name="portTitle" id="portTitle" maxLength="30" placeholder='제목을 입력하세요'></input>
                    </td>
                </tr>

                <tr>
                    <th>
                        프로젝트 설명
                    </th>
                    <td>
                        <input type='text' name="portSubTitle" id="portSubTitle" maxLength="100" placeholder='프로젝트에 대해 간단히 설명해주세요'></input>
                    </td>
                </tr>

                <tr>
                    <th>
                        기술 스택
                    </th>
                    <td>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={stacks}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Stack" />}
                        />
                    </td>
                </tr>

                <tr>
                    <th>
                        Github 주소
                    </th>
                    <td>
                        <input type='text' name="gitLink" id="gitLink" placeholder='Github 링크를 첨부해주세요'></input>
                    </td>
                </tr>
            </table>
            <div className='editor'>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>		
            	
            <input class="portBtn" type='reset' value="취소"/>
            <input class="portBtn" type='submit' value="등록"/>
      			
        </form>
    </div>
  )
}

const stacks = [
    { label: 'Java', year: 1994 },
    { label: 'Python', year: 1972 },
    { label: 'Spring Boot', year: 1974 },
    { label: 'Django', year: 2008 },
    { label: 'Javascript', year: 1957 },
    { label: "jQuery", year: 1993 },
    { label: 'Git', year: 1994 },
  ];

export default PortfolioInsert