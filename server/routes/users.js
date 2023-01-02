import  express  from "express";
const router=express.Router();
import {signIn,signUp} from '../controllers/users.js'
 
router.post('/signin',signIn)
router.post('/signup',signUp)
 


export default router;
