import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import audit from './images/audit.png';

function PortfolioListItem(props) {
    let history = useNavigate();

  return (
    <div className='PortfolioContents'> 
        <Card sx={{ width: 345}} >
        <CardActionArea>
            <CardMedia
                component="img"
                height="180"
                image={audit}
                alt="image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.port.portTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.port.portSubTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Stack : {props.port.stackName}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    </div>
  )
}

export default PortfolioListItem