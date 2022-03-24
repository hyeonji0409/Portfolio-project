import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import axios from 'axios';

import index_img from './images/index_img.png';


function Introduce() {


    return (
        <div className="contain">
            <div className="main_contain">
                <h1>[미완성]INDEX 페이지입니다.</h1>
                <img src={index_img}></img>
            </div>

        </div>

    );
}

export default Introduce;