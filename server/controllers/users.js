import Post from "../models/post.js";
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/user.js";
import user from "../models/user.js";
const router = express.Router();
export const signIn=async(req,res)=>{

const {email,password}=req.body;
try {
    console.log('hiiii1');
    const userInfo=await User.findOne({email});
    if(!userInfo) return res.status(404).json({message:'user doesn`t exist'})
    const isPasswordCorrect = await bcrypt.compare(password,userInfo.password);
    if(!isPasswordCorrect){return res.status(400).json({message:'invalid credentials'})}
    const token = jwt.sign({email:userInfo.email,id:userInfo._id},'test',{expiresIn:'1h'})
    return res.status(200).json({result:userInfo,token});

} catch (error) {
    res.status(500).json({message:'error'})
    
}




}
export const signUp=async(req,res)=>{
    console.log('hiiii1');
    const {email,password,confirmPassword,firstName,lastName}=req.body;
try {
    
    const userInfo=await User.findOne({email});
    if(userInfo) return res.status(400).json({message:"the email is used by another account"});
    if(confirmPassword!== password) return res.status(400).json({message:'passwords dont match'})
    const hashedPassword=await bcrypt.hash(password,12);
    const result=await user.create({email,password:hashedPassword,name:`${firstName} ${lastName}`});
    
    const token = jwt.sign({email:result.email,id:result._id},'test',{expiresIn:'1h'})
    return res.status(200).json({result,token});
} catch (error) {
    res.status(500).json({message:'error'})
}


}
