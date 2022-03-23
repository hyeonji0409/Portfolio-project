import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PortfolioListItem(props) {
    let history = useNavigate();

    

  return (
    <a className='contentBox'>
        <div>
            <div className='contentsImg'>
                Image
            </div>
            <div className='contentsText'>
                <div className='contentsTitle'>{props.port.portTitle}</div>
                <div className='contentsDetail'>{props.port.portSubTitle}</div>
                <div className='contentsTag'>{props.port.stackName}</div>
            </div>
        </div>
    </a>
  )
}

export default PortfolioListItem