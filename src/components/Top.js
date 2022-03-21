import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';

function Top() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">[홈] </Link>
                </li>
            </ul >

            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div >
    );
}

export default Top;