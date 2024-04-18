import History from '../models/History.js'
import mongoose from 'mongoose'

export const HistoryController=async(req,res)=>{
    const HistoryData=req.body;
    // console.log(HistoryData);
    const addToHistory=new History(HistoryData);

    try {
        await addToHistory.save();
        res.status(200).json('added to Watch Later')
        // console.log("Done");
    } catch (error) {
        res.status(400).json(error)  
    }
}

export const getAllHistoryController = async (req, res)=>{
    try {
        const watchvideos=await History.find();
        // console.log("Controller" + watchvideos);
        res.status(200).send(watchvideos);
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const clearHistoryController = async (req, res)=>{
    const { userId }= req.params;
    try {
        await History.deleteMany({
            Viewer:userId
        })
        res.status(200).json({message:"video removed from watch later.."})
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}