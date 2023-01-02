import React ,{useState,useEffect}from 'react'
import { getPosts } from '../../actions/posts'
import {Container,AppBar,Typography,Grow,Grid,paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Form from '../Form/Form';
import Posts from '../posts/Posts'

import paginate from '../pagination/pagination.jsx';
import { mergeClasses } from '@material-ui/styles';
export default function Home() {
    
    const dispatch = useDispatch();
    const [currentId,setCurrentId]= useState(0);
    useEffect(() => {
        dispatch(getPosts());
      }, [currentId,dispatch]);
  return (
    <Grow in>
    <Container>
    <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
    <Grid item xs={12} sm={7}><Posts setCurrentId={setCurrentId}/></Grid>
    <Grid item xs={12} sm={4}><Form currentId={currentId} setCurrentId={setCurrentId}/>
   
    
    

    </Grid>
    </Grid>
    
    </Container>
    </Grow>
  )
}
