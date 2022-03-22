import React, { useState, useEffect } from 'react';
import Login from './Login';
import { Link, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
// import axios from 'axios';

import './About.scss';
import foilo_list from './images/foilo_list.png';



function About() {


    return (
        <div className="contain">
            <div className="contain1">
                <div className="about_theme">
                    <h1>Draw your PORTFOLIO !</h1>
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
                        <h1>이미지 들어가는 자리</h1>
                        <img src={foilo_list}></img>
                    </div>
                    <div className="Howtowork">
                        <h1>How To Work</h1>
                        <div className="howto_p">
                            <p>최신순, 오래된순, 조회 수, 기술순서로 정렬</p>
                            <p>검색 기능 - 스택으로 검색</p>
                        </div>
                        <div className="howto_p">
                            <p>최신순, 오래된순, 조회 수, 기술순서로 정렬</p>
                            <p>검색 기능 - 스택으로 검색</p>
                        </div>
                        <div className="howto_p">
                            <p>최신순, 오래된순, 조회 수, 기술순서로 정렬</p>
                            <p>검색 기능 - 스택으로 검색</p>
                        </div>
                        <button className="howto_button">go ▶</button>
                    </div>
                </div>

            </div>

            <div className="contain3">
                <div className="contain3-1">
                    <div className="howto_space">
                        <h1>이미지 들어가는 자리</h1>
                        <img src={foilo_list}></img>
                    </div>
                    <div className="Howtowork">
                        <h1>How To Work</h1>
                        <div className="howto_p">
                            <p>최신순, 오래된순, 조회 수, 기술순서로 정렬</p>
                            <p>검색 기능 - 스택으로 검색</p>
                        </div>
                        <div className="howto_p">
                            <p>최신순, 오래된순, 조회 수, 기술순서로 정렬</p>
                            <p>검색 기능 - 스택으로 검색</p>
                        </div>
                        <div className="howto_p">
                            <p>최신순, 오래된순, 조회 수, 기술순서로 정렬</p>
                            <p>검색 기능 - 스택으로 검색</p>
                        </div>
                        <button className="howto_button">go ▶</button>
                    </div>
                </div>

            </div>

            <div className="contain3">
                <div className="contain3-1">
                    <div className="howto_space">
                        <h1>이미지 들어가는 자리</h1>
                        <img src={foilo_list}></img>
                    </div>
                    <div className="Howtowork">
                        <h1>How To Work</h1>
                        <div className="howto_p">
                            <p>최신순, 오래된순, 조회 수, 기술순서로 정렬</p>
                            <p>검색 기능 - 스택으로 검색</p>
                        </div>
                        <div className="howto_p">
                            <p>최신순, 오래된순, 조회 수, 기술순서로 정렬</p>
                            <p>검색 기능 - 스택으로 검색</p>
                        </div>
                        <div className="howto_p">
                            <p>최신순, 오래된순, 조회 수, 기술순서로 정렬</p>
                            <p>검색 기능 - 스택으로 검색</p>
                        </div>
                        <button className="howto_button">go ▶</button>
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