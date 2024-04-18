import videoFiles from '../models/videoFiles.js'

export const uploadVideo = async (req, res, next) => {
    if (req.file === undefined) {
        res.status(404).json({ message: "Please Upload a '.mp4' Video File Only ..." })
    }
    else{
        try {
            const file=new videoFiles({
                videoTitle:req.body.title,
                fileName:req.file.originalname,
                filePath:req.file.path,
                fileType:req.file.mimetype,
                fileSize:req.file.size,
                videoChanel:req.body.chanel,
                uploader:req.body.uploader,
            })
            await file.save();
            console.log("done");
            res.status(201).send("File Uploaded Successfully");
        } catch (error) {
            res.status(400).send(error.message);
            
        }
    }
}

export const getAllVideos= async (req, res)=>{
    try {
        const files=await videoFiles.find();
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
        
    }
}