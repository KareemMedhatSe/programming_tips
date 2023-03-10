import Post from "../models/post.js";
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const posts = await Post.find();
                
        res.status(200).json(posts);
        return posts;
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const s=req.headers.authorization.split(" ")[1];
    
    
    
    const newPostMessage = new Post({ ...post,creator:req.userId,createdAt:new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    
}
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await Post.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}
export const deletePost=async(req,res)=>{
    
    const id=req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    //if(req.userId!==await Post.findById(id).creator)return res.status(404).send(`you can't delete another's one post`);
        await Post.findByIdAndRemove(id);
            
        res.json({ message: "Post deleted successfully." });
}
export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!req.userId)return res.json({message:'not authorized'})
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await Post.findById(id);
    const index= post.likes.findIndex((id)=>id===String(req.userId))
    if(index===-1){post.likes.push(req.userId)}
    else{post.likes=post.likes.filter((id)=>id !==String(req.userId));}
    const updatedPost = await Post.findByIdAndUpdate(id,post, { new: true });
    
    res.json(updatedPost);
}
export default router;