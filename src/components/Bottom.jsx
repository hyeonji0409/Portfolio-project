import React, { useState, useEffect } from 'react';

import Login from './Login';
import SignUp from './SignUp';
import Introduce from './Introduce';
import Mypage from './Mypage';

import { Link, Routes, Route } from 'react-router-dom';

import './Bottom.scss';


class Bottom extends React.Component {


    render() {
        return (
            <div className="bottom_main">
                {/* <h1>Bottom Menu Test</h1> */}
                <div className="bottom_div">
                    <div>
                        <h2>PORTFOILO PROJECT</h2>
                        <h2>Dev. 정현지 김용휘 유승희 손지원 박재훈</h2>
                        <p>서울특별시 강남구 삼성로 512</p>
                        <br />
                        <h2>고객센터</h2>
                        <p>서울 금천구 벚꽃로 278 SJ테크노빌 빌딩</p>
                        <p>02-1111-1111</p>
                        <br />
                        <h2>전자금융거래 분쟁처리 담당</h2>
                        <p>쇼핑 1588-1555</p>
                        <p>팩스 02-2222-2222</p>
                    </div>
                    <div>
                        <h2>PRODUCTS</h2>
                        <p><a href='/Introduce' className="bottom_prd">Introduce</a></p>
                        <p><a href='/Login' className="bottom_prd">Login</a></p>
                        <p><a href='/SignUp' className="bottom_prd">SignUp</a></p>
                        <p><a href='/Mypage' className="bottom_prd">Mypage</a></p>
                    </div>
                    <div>
                        <h2>CONTACT US</h2>
                        <p>FAQ</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default Bottom;

