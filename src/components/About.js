import React, { useState, useEffect } from 'react';
import styled from "styled-components";
// import axios from 'axios';

import './About.scss';



function About() {

    // const AD = () => {
    //     const [isHovering, setIsHovering] = useState(0);

    //     return (
    //         <Wrapper
    //             onMouseOver={() => setIsHovering(1)}
    //             onMouseOut={() => setIsHovering(0)}
    //         ></Wrapper>
    //     )
    // }


    // const [num, setNumCount] = useState(10);
    // const [countTimes, setCountTimes] = useState(0);

    // useEffect(() => {
    //     setCountTimes(countTimes + 1)
    // }, [num])

    // const plusMinus = (flag) => {
    //     console.log('호출>>>');
    //     console.log(flag, num);

    //     if (flag == '+') {
    //         setNumCount(num + 1);
    //     } else {
    //         setNumCount(num - 1);
    //     }
    // };



    return (
        <div className="contain">
            <div className="contain1">
                <div className="about_theme">
                    <h1>Draw your PORTFOLIO !</h1>
                    <p className="about_text">나만의 이력과 포트폴리오를 손쉽게</p>
                    <p>Please draw your resume.</p>
                    <p>Like your beautiful and enjoyable life!</p>
                    <button className="theme_button">get start ▷</button>
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
                    <div className="about_keyword">
                        <h1>Keyword</h1>
                        <p>손쉬운 나만의 이력, 포트폴리오 관리</p>
                        <p>Todo-List로 스케줄을 한 눈에</p>
                    </div>
                    <div className="about_module">
                        <h1>Products</h1>
                        <ul>
                            <li>Overview</li>
                            <li>Insert Portfoilo</li>
                            <li>Insert RESUME</li>
                            <li>Todo-List</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contain3">
                <div className="Howtowork">
                    <h1>How To Work</h1>
                    <p>개인 포트폴리오를 업로드 하고 이력서 등의 자료를 관리할 수 있는 홈페이지</p>
                </div>
            </div>
        </div>

    );
}

export default About;