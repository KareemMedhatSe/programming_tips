import React,{useState,useEffect} from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import styles from './styles'
import { useNavigate } from 'react-router-dom';
import { Avatar,Paper,Button,Grid,Typography,Container, Icon } from '@material-ui/core';


import useStyles from './styles';
import Input from './Input';
import {GoogleLogin} from 'react-google-login'
import LockOutlined from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode'
import {signin,signup} from '../../actions/auth'
export default function Auth() {
  const initial={firstName:'',lastName:'',email:'',password:'',confirmPassword:''}
  const [showPassword,setShowPassword]=useState(false);
  const [signUp,setsignUp] = useState(false);
  const [formInfo,setFormInfo]=useState(initial);
  const classes = useStyles ();
 const navigate=useNavigate();
  const switchMode=()=>{setsignUp( signUp=>!signUp);}
  const handleSubmit= (e)=>{
    e.preventDefault();
    if(signUp){dispatch(signup(formInfo,navigate))}
    else{dispatch(signin(formInfo,navigate))}
   
  }
  const handleChange=(event)=>{ const{name,value}=event.target;setFormInfo({ ...formInfo , [name]:value})}
  const handleshowpassword=()=>{setShowPassword( (prevShowPassword)=>!prevShowPassword )}
  const dispatch=useDispatch();
  const handleCallbackResponse=async(Response)=>{
    
  var result=jwt_decode(Response.credential);
  var jwt =Response.credential;
  try {
    dispatch({type:'Auth',data:{result,token:jwt}})  
    navigate('/')
  } catch (error) {
    console.log(error)
  }
  
  
  }
  
 
    useEffect(()=>{

        window.google.accounts.id.initialize({client_id:"449108495894-h7stps1ddboduh8n0h5eq965ef34c5ui.apps.googleusercontent.com",
        callback:handleCallbackResponse
    });
    window.google.accounts.id.prompt();
    window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),{theme:"outline",size:"large"}


        );
       
    },[])
  return (
    <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={3}>
    <Avatar className={classes.avatar}>
    <LockOutlined/>

    </Avatar>
    <Typography variant='h5'>{signUp?'Sign Up':'Sign In'}</Typography>
    <form className={classes.form} onSubmit={handleSubmit} >
    <Grid container spacing={2}>
    {signUp &&(
     <div>
     
      <Input name="firstName" label="first Name" handleChange={handleChange} autoFocus  />
      <Input name="lastName" label="last Name" handleChange={handleChange}    />
      </div>
      )}
    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
    <Input name="password" label="password" handleChange={handleChange} type={showPassword?'text': 'password'} handleshowpassword={handleshowpassword} />
    {signUp && <Input name='confirmPassword' label='confirm password' handleChange={handleChange} type='password'/>}
    </Grid>
    <button type='submit' fullwidth variant="contained" color='primary' className={classes.submit}  >
    {signUp?'Sign Up':'Sign In'}
    
    </button>



    <div id='signInDiv'></div>
    
   
    <Grid container justifyContent="flex-end">
    <Grid item>
    <Button onClick={switchMode} >
    {signUp?'Already have an account ? sign in' : 'sign up if you don`t have an account'}
    </Button>
    </Grid>
    </Grid>
    </form>
    </Paper>
    </Container>
  )
}
