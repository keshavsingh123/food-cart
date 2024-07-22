import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Cardsdata from './CardsData';
import { useDispatch } from 'react-redux';
import './style.css'
import { ADD } from '../redux/actions/Action';
function Cards() {
    const [data,setData] = useState(Cardsdata)
    const dispatch = useDispatch()
    const send = (e) =>{
      dispatch(ADD(e))
    }
  return (
    <div className='container mt-3'>
        <h2 className='text-center'>Add To Cart Project</h2>
        <div className='row d-flex justify-content-center align-items-center'>
        {data.map((ele,id)=>{
            return(
                <Card key={id} style={{ width:'22rem',border:'none' }} className='mx-2 mt-4 card-style'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        className='mt-3'
        image={ele.imgdata}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ele.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Price: ${ele.price}
        </Typography>
      </CardContent>
      <CardActions>
      <div className='button_div d-flex justify-content-center'>
      <Button onClick={()=>send(ele)} size="small" className='col-lg-12'>
            Add To cart
        </Button>
      </div>
        
      </CardActions>
    </Card>
            )
        })}
       
        </div>
    </div>
  )
}

export default Cards