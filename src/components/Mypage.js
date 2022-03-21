import React, { useState, useEffect } from 'react';
import './Mypage.scss';

function Mypage() {
    const sessionData = "mineItRecord";
    sessionStorage.setItem("mineSession", sessionData );
    sessionStorage.getItem("mineSession");

    
 
    return(
        <div>
            {sessionData}님
        </div>
    )
}
 
export default Mypage;