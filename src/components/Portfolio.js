import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Portfolio.scss';

function Portfolio() {
    return (
        <div className='wrap'>
            <div className='PortfolioComponent'>
                <div className='subHeader'>
                    <div><Link to='/' >최신순</Link></div>
                    <div><Link to='/' >오래된순</Link></div>
                    <div>검색 버튼</div>
                </div>
                <div className='PortfolioContents'>
                    <a className='contentBox'>
                        <div>
                            <div className='contentsImg'>
                                Image
                            </div>
                            <div className='contentsText'>
                                <div className='contentsTitle'>Title</div>
                                <div className='contentsDetail'>Detail</div>
                                <div className='contentsTag'>Tag</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio