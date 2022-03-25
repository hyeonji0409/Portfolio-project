import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import audit from './images/audit.png';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

function PortfolioListItem(props) {
    let history = useNavigate();

    

  return (
    <div className='PortfolioContents'> 
        <Card sx={{ width: 345}} >
            <Link to={"/portfolioDetailView/" + props.port.portNo}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image= {audit}
                        alt="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='cardText' fontWeight='bold'>
                        {props.port.portTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                        {props.port.portSubTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" marginTop="15px">
                            <Stack direction="row" spacing={1}>
                                <Chip icon={<FaceIcon />} label={props.port.stackName} variant="outlined" />
                            </Stack>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    </div>
  )
}

export default PortfolioListItem