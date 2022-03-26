import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, Component, useEffect } from "react";
import axios from 'axios';
import './PortfolioInsert.scss';

function PortfolioUpdate(props) {

    const {portNo} = useParams();

     // state
     const [port, setPort] = useState({
        memId: '',
        portStackNo: '',
        portNo: '',
        portTitle: '',
        portSubTitle: '',
        gitLink: '',
        portDetails: '',
        portImages: ''
    });
    
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/portfolioDetailView/' + portNo);
        console.log(response.data);
        console.log(response.data.portNo);

        setPort({
            memId: response.data.memId,
            portStackNo: response.data.portStackNo,
            portNo: response.data.portNo,
            portTitle: response.data.portTitle,
            portSubTitle: response.data.portSubTitle,
            gitLink: response.data.gitLink,
            portDetails: response.data.portDetails,
            portImages: response.data.portImages
        });
        setLoading(false);
    }

    useEffect( () => {
        loadData();
    }, []);

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
            portNo: port.portNo,
            portTitle: '',
            portSubTitle: '',
            gitLink: '',
            portDetails: '',
            portImages: ''
        })
        alert("글 수정을 취소하시겠습니까?");
        history('/portfolio');
    };

    let history = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

       var frmData = new FormData(document.portfolioUpdate);

        axios.post('http://localhost:8080/updatePortfolio/', frmData)
            .then(
                response => {
                    alert("수정 완료");
                    history('/portfolio'); // portfolio 페이지로 이동
                }
            );
    }

    return (
        <div className='container_portfolioInsert'>
            <div className='insertForm'>
                <h2>프로젝트 수정</h2>
            </div>
    
            <form name='portfolioUpdate' onSubmit={onSubmit} onReset={onReset}>
                <table className='poTable'>
                    <tbody>
                    <tr hidden>
                        <th>
                            글 번호
                        </th>
                        <td>
                             <input type='int' name="portNo" id="memId" 
                             value={port.portNo} onChange={getValue} maxLength="30" placeholder='제목을 입력하세요'></input>
                        </td>
                    </tr>
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
                    {/* <input type="file" name="portImages" className='uploadFile' readOnly></input> */}
                </div>		
                    
                {/* <input class="portBtn" type='reset' value="취소"/> */}
                <input class="portBtn" type='submit' value="등록" />
                <input class="portBtn" type='reset' value="취소"/>
                      
            </form>
        </div>
      )

}


export default PortfolioUpdate;