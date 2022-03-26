
import './TodoTemplate.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const today = new Date();
const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });
  
 


const TodoTemplate = ({ children }) => {
    return (
        <div className='TodoTemplate'>
            
            <div className="app-title">{dateString}  {dayName}<br></br>
            {/* {memId}님의 일정 관리 */}
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;