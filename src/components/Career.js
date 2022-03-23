import React from 'react';
import Side from './Side';
import componentAdd from './componentAdd';

import './Career.scss';

function career(props) {   

    const Add = componentAdd()

    return (        
        <div>
            <Side/>
            <div id="wrap">                
            <div id = "Privacy">
                <h1><strong>김이름</strong></h1>                
                <img id="emailImg" alt ="email" src="./img/email.png"/><h5 id = "email">hiw97@naver.com</h5><br/><br/>
                <img id="phoneImg" alt ="phone" src="./img/phone.png"/><h5 id= "phone">01012345678</h5><br/><br/>
                <img id="birthImg" alt ="birth" src="./img/birth.png"/><h5 id= "birth">2000.00.00</h5><br/><br/>
                <img id="careerImg" alt ="career" src="./img/career.png"/>
                <select id="careerSelect">
                    <option value="1" >신입</option>
                    <option value="2">경력</option>
                </select>
            </div>
            <br/>
                <div id = "technologyStack" class = "scrollContent">
                    <h1 id="title">기술스택 / 직무</h1>
                    <h5 id="smallTitle">기술스택<span id = "red">&nbsp; &bull;</span></h5>
                    <input type="text" id="input" placeholder="ex) html, css, aws, java ......"></input>
                    <h5 id="smallTitle">직무</h5>
                    <input type="text" id="input" placeholder="ex) 서버/백엔드 개발자, 프론트엔드 개발자, 웹 풀스택 개발자......"></input>
                </div>

                <div id = "Education" class = "scrollContent">
                    <h1 id="title">학력</h1>
                    <h5 id="smallTitle">학교명<span id = "red">&nbsp; &bull;</span></h5>
                    <input type="text"  id="input"  placeholder="ex) XX대학교"></input>

                    <h5 id="smallTitle">학력 구분</h5>
                    <select id="educationSelect">
                    <option value="" disabled selected>선택해주세요</option>
                    <option value="1" >고등학교</option>
                    <option value="2">대학(2,3년)</option>
                    <option value="3" >대학교(4년)</option>
                    <option value="4">대학원(석사)</option>
                    <option value="5" >대학원(박사)</option>
                    </select>

                    <h5 id="smallTitle">학과 명</h5>
                    <input type="text" id="input" placeholder="ex) 컴퓨터소프트웨어공학과"></input>

                    <h5 id="smallTitle">졸업년도<span id = "red">&nbsp; &bull;</span></h5>
                    <input type="text" id="input" placeholder="ex) 2016.03 ~ 2022.02"></input>

                    <h5 id="smallTitle">학점</h5>
                    <input type="text" id="input" placeholder="ex) 3.88 / 4.50"></input>
                    <br/>
                </div>

                <div id = "link" class = "scrollContent">
                    <h1 id="title">링크</h1>
                    <img id="githubImg" alt ="github" src="./img/github.png"/>
                    <input type="text" id="inputLink" placeholder="ex) javascript"/>
                    <div id="hrBar">
                    <br/>
                    <hr id="addHr"/><button id="addButton" onClick={Add}>+</button>
                    <h3 id = "EducationAdd">링크 추가</h3>
                    </div>
                </div>

                <div id = "course" class = "scrollContent">
                    <h1 id="title">교육이력</h1>
                    <h5 id="smallTitle">교육명</h5>
                    <input type="text" id="input" placeholder="ex) 지능형 웹서비스 풀스택 개발"></input>

                    <h5 id="smallTitle">교육기관</h5>
                    <input type="text" id="input" placeholder="ex) 멀티캠퍼스"></input>

                    <h5 id="smallTitle">교육기간</h5>
                    <input type="text" id="input" placeholder="ex) 21.10.25 ~ 22.04.11"></input>

                    <h5 id="smallTitle">상세내용</h5>
                    <input type="text" id="input" placeholder="ex) 웹서비스 개발에 필요한 프론트엔드, 백엔드 기술을 아울러 학습, 활용 가능하도록 실무 능력 상승"></input>
                    
                    <div id="hrBar">
                    <br/>
                    <hr id="addHr"/><button id="addButton">+</button>
                    <h3 id = "EducationAdd">교육 추가</h3>
                    </div>
                </div>

                <div id = "other" class = "scrollContent">
                    <h1 id="title">기타이력</h1>

                    <div id="hrBar">
                    <br/>
                    <hr id="addHr"/><button id="addButton">+</button>
                    <h3 id = "EducationAdd">기타 추가</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default career;