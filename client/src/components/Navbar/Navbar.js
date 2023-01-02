import React ,{useState,useEffect}from 'react'
import {AppBar,Avatar,Button,Typography,Toolbar,Buttom} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate ,useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './styles';
import decode from 'jwt-decode'

import memories from'../../images/idea_logo.png'
export default function Navbar() {
    const classes=styles();
    const location=useLocation();
    const navigate =useNavigate();
    const dispatch=useDispatch();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const handleLogout=()=>{

      dispatch({type:'logout'})
      navigate('/');
      setUser(null)

    }
    useEffect(()=>{
      const token=user?.jwt
      setUser(JSON.parse(localStorage.getItem('profile')))
      if(token){const decodedToken=decode(token);if(decodedToken.exp*1000 < new Date().getTime())handleLogout();}

    },[location])
   
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
            
            <img className={classes.image} src={memories} alt='memories' height="60"  />
            <Typography className={classes.heading} variant='h4' align='center' component={Link} to="/">programming tips</Typography>
            
            </div>
            <Toolbar className={classes.toolbar}>
            {user? (
                  <div className={classes.profile}>
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                  <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                  <Button variant='contained' className={classes.logout} color="secondary" onClick={handleLogout}>log out</Button>
                  </div>


            ):(
                <Button  variant='contained' color='primary' component={Link} to="/auth">sign in </Button>
            )
          }
            
            </Toolbar>
            </AppBar>
  )
}
