import likedVideo from '../models/likedVideo.js';
import LikedVideo from '../models/likedVideo.js'
import mongoose from 'mongoose'

export const likeVideoController=async(req,res)=>{
    const likedVideoData=req.body;
    // console.log(likedVideoData);
    const addToLikedVideos=new LikedVideo(likedVideoData);

    try {
        await addToLikedVideos.save();
        res.status(200).json('added to likedvideo')
        // console.log("Done");
    } catch (error) {
        res.status(400).json(error)  
    }
}

export const getAllLikeVideoController = async (req, res)=>{
    try {
        const likedvideos=await LikedVideo.find();
        // console.log("Controller" + likedvideos);
        res.status(200).send(likedvideos);
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const deleteLikedVideoController = async (req, res)=>{
    const { videoId:videoId,Viewer:Viewer }= req.params;
    try {
        await likedVideo.findOneAndDelete({
            videoId:videoId,Viewer:Viewer
        })
        res.status(200).json({message:"video removed from watch later.."})
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}