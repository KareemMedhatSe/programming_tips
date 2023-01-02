import React ,{useEffect,useState}from 'react';

import styles from './styles';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import { getPosts } from './actions/posts';
import Home from './components/Home/Home'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth'


export const App=()=>{
    
      
    return(
            <BrowserRouter>
           <Container maxwidth="lg">
           
            <Navbar/>
            <Routes>
            <Route path='/' exact element=<Home/>/>
            <Route path='/auth' exact element=<Auth/>/>

            </Routes>

           
           </Container>
           </BrowserRouter>

    )
}
export default App;