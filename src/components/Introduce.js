import React, { useState, useEffect } from 'react';
import Login from './Login';
import { Link, Routes, Route } from 'react-router-dom';
// import axios from 'axios';

import foilo_list from './images/foilo_list.png';



function Introduce() {


    return (
        <div className="contain">
            <div className="main_contain">
                <h1>INDEX 페이지입니다.</h1>

            </div>

            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>

    );
}

export default Introduce;