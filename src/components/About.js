import React, { useState, useEffect } from 'react';
import Login from './Login';
import Mypage from './Mypage';
import Portfolio from './Portfolio';
import PortfolioInsert from './PortfolioInsert';
import PortfolioiDetail from './PortfolioiDetail';

import { Link, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
// import axios from 'axios';

import './About.scss';
import foilo_list from './images/foilo_list.png';
import foilo_detail from './images/foilo_detail.png';
import foilo_write from './images/foilo_write.png';
import resume_write1 from './images/resume_write1.png';
import resume_write2 from './images/resume_write2.png';
import todolist from './images/todolist.png';
import mypage_img from './images/mypage_img.png';

//testLine

function About() {


    return (
        <div className="contain">
            <div className="contain1">
                <div className="about_theme">
                    <h1>Draw your PORTFOLIO !</h1>
                    {/* <p></p> */}
                    <p className="about_text">나만의 이력과 포트폴리오를 손쉽게</p>
                    <p>Please draw your resume.</p>
                    <p>Like your beautiful and enjoyable life!</p>
                    <Link to='/login'><button className="theme_button">get start ▷</button></Link>
                </div>
            </div>
            <div className="contain2">
                <div className="contain2-1">
                    <div className="about_info">
                        <h1>실생활에서 느낀 불편함</h1>
                        <p>포트폴리오를 보여주고 싶은데 어떻게 보여주지?</p>
                        <p>나만의 이력을 저장할 곳이 필요해.</p>
                        <p>Todo-List를 통한 스케줄 관리를 하고 싶어.</p>
                    </div>
                </div>
                <div className="contain2-2">
                    <div className="key_div">
                        <div className="key_img">
                        </div>
                        <div className="about_keyword">
                            <h1>Keyword</h1>
                            <p>손쉬운 나만의 이력, 포트폴리오 관리</p>
                            <p>Todo-List로 스케줄을 한 눈에</p>
                        </div>
                    </div>
                    <div className="module_div">
                        <div className="about_module">
                            <h1>Products</h1>
                            <ul className="about_ul">
                                <li>Overview</li>
                                <li>Insert Portfoilo</li>
                                <li>Insert RESUME</li>
                                <li>Todo-List</li>
                            </ul>
                        </div>
                        <div className="module_img">
                        </div>
                    </div>
                </div>
            </div>
            <div className="contain3">
                <div className="contain3-1">
                    <div className="howto_space">
                        <h1>포트폴리오 목록</h1>
                        <img src={foilo_list}></img>
                    </div>
                    <div className="Howtowork">
                        <h1>How To Work</h1>
                        <div className="howto_p">
                            <p>최신순, 오래된순, 조회 수, 기술순서로 정렬</p>
                            <p>검색 기능 - 스택으로 검색</p>
                        </div>
                        <div className="howto_p">
                            <p>포트폴리오 썸네일 - 사진 / gif로 등록</p>
                            <p>사용 기술 - JS, HTML, CSS, Spring Boot 등 태그 추가</p>
                            <p>간단한 설명</p>
                        </div>
                        <div className="howto_p">
                            <h3>지금 한번 확인해보세요!</h3>

                        </div>
                        <Link to='/Portfolio'><button className="howto_button">go ▶</button></Link>
                    </div>
                </div>

            </div>

            <div className="contain3">
                <div className="contain3-2">
                    <div className="howto_space">
                        <h1>포트폴리오 Detail & Write</h1>
                        <img src={foilo_detail}></img>
                        <img src={foilo_write}></img>
                    </div>
                    <div className="Howtowork2">
                        <h1 className="Howto_h1">How To Work</h1>
                        <div className="howto_p">
                            <p>제목, 태그, Git 링크를 삽입하여 간단한 조회!</p>
                        </div>
                        <div className="howto_p">
                            <p>기술 스택 선택 & 깃허브 주소 등록</p>
                            <p>사용기술, 개발환경, 실행 방법, 프로젝트 캡쳐본</p>
                            <p>주요 기능 설명, 업데이트 후 기능 등등</p>
                            <p>나눠서 적을 수 있도록 구성</p>
                        </div>
                        <div className="howto_p">
                            <h3>나만의 포트폴리오를 확인해보러 가볼까요?</h3>

                        </div>
                        <Link to='/Portfolio'><button className="howto_button">go ▶</button></Link>
                    </div>
                </div>

            </div>

            <div className="contain3">
                <div className="contain3-3">
                    <div className="howto_space">
                        <h1>RESUME - 이력서</h1>
                        <img src={resume_write1}></img>
                        <img src={resume_write2}></img>
                    </div>
                    <div className="Howtowork3">
                        <h1>How To Work</h1>
                        <div className="howto_p">
                            <p>나만의 이력서를 간단히 작성</p>
                        </div>
                        <div className="howto_p">
                            <p>기술스택/직무, 학력, Git/Blog 등 링크, 각종 활동 추가 기능</p>
                            <p>경력 활동 기재 가능</p>
                        </div>
                        <div className="howto_p">
                            <h3>나만의 이력서를 채워보세요!</h3>
                        </div>
                        <Link to='/Portfolio'><button className="howto_button">go ▶</button></Link>
                    </div>
                </div>

            </div>

            <div className="contain4">
                <div className="contain3-4">
                    <div className="howto_space_1">
                        <h1>ToDo-List</h1>
                        <img src={todolist}></img>
                    </div>
                    <div className="Howtowork3">
                        <h1>How To Work</h1>
                        <div className="howto_p">
                            <p>스케줄러를 통한 일정관리</p>
                        </div>
                        <div className="howto_p">
                            <p>오늘의 할 일이 있지는 않으신가요?</p>
                            <p>중요한 일정을 따로 보관해 관리해보세요.</p>
                            <p>현재 계획된 일정이 있으시군요!</p>
                        </div>
                        <div className="howto_p">
                            <h3>나의 일정을 손쉽게 관리하러 가볼까요?</h3>
                        </div>
                        <Link to='/'><button className="howto_button">go ▶</button></Link>
                    </div>
                </div>

            </div>

            <div className="contain4">
                <div className="contain3-5">
                    <div className="howto_space_2">
                        <h1>Login & My Page</h1>
                        <img src={mypage_img}></img>
                    </div>
                    <div className="Howtowork3">
                        <h1>How To Work</h1>
                        <div className="howto_p">
                            <p>로그인 회원가입으로 마음껏 즐겨주세요!</p>
                        </div>
                        <div className="howto_p">
                            <p>나만의 포트폴리오를!</p>
                            <p>나만의 이력서를!</p>
                            <p>나의 ToDo-List를!</p>
                            <p>MyPage에서 쉽고 빠르게 등록, 삭제하세요!</p>
                        </div>
                        <div className="howto_p">
                            <h3>함께 이 모든 것을 즐길 준비하시고~</h3>
                        </div>
                        <Link to='/Mypage'><button className="howto_button">go ! ▶</button></Link>
                    </div>
                </div>

            </div>

            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>

    );
}

export default About;