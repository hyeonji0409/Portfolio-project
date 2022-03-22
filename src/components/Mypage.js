import React, { useState, useEffect } from 'react';
import './Mypage.scss';

function Mypage() {
    const sessionData = "mineItRecord";
    sessionStorage.setItem("mineSession", sessionData );
    sessionStorage.getItem("mineSession");

    
 
    return(
        <div className='box'>
            
        <div className='mypagebox'>
            <div className='userName'>
                {sessionData}
            </div>
        </div>
        </div>
    )
}
 
export default Mypage;