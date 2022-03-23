import React, { useState, useEffect } from 'react';
import Login from './Login';
import { Link, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
// import axios from 'axios';

import foilo_list from './images/foilo_list.png';
import './Bottom.scss';


class Bottom extends React.Component {


    render() {
        return (
            <div className="bottom_main">
                <h1>Bottom Menu Test</h1>
                <h2>Dev. ㅁㅁㅁ ㅇㅇㅇ ㅎㅎㅎ ㅍㅍㅍ ㄷㄷㄷ</h2>
            </div>

        );
    }
}

export default Bottom;

