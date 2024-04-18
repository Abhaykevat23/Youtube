import mongoose from 'mongoose';
import Comment from '../models/comment.js'
export const postComment = async (req, res) => {
    const commentData = req.body;
    const postComment = new Comment(commentData);

    try {
        await postComment.save();
        res.status(200).json('comment added')
        // console.log("Done");
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllComment = async (req, res) => {
    try {
        const commentList = await Comment.find();
        res.status(200).send(commentList);
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const deleteComment = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("comment Unavailable...");
    }
    // console.log(_id);
    try {
        await Comment.findByIdAndDelete(_id);
        res.status(200).json({ message: "comment deleted" })
    } catch (error) {
        res.status(400).send(error);
    }
}


export const editComment = async (req, res) => {
    const { id: _id } = req.params;
    const { commentBody } = req.body;
    console.log(commentBody + "-----" + _id);
    try {
        const updateComment = await Comment.findByIdAndUpdate(
            _id, {
            $set: { "commentBody": commentBody }
            }
        )
        res.status(200).json(updateComment)
    } catch (error) {
        res.status(400).json(error);
    }
}