import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './VideoUpload.css'
import { uploadVideo } from '../../actions/video';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
function VideoUpload({setvideoUploadPage}) {
   
    const [Title, setTitle] = useState("");
    const [VideoFile, setVideoFile] = useState("");
    const CurrentUser = useSelector(state => state.currentUserReducer);
    const dispatch = useDispatch();
    
    const handleSetVideoFile = (e) => {
        setVideoFile(e.target.files[0]);
    }

    const [Progress, setProgress] = useState(0);
    const fileOptions={
        onUploadProgress:(progressEvent)=>{
             const {loaded,total}=progressEvent;
             const percentage=Math.floor(((loaded/1000)*100)/(total/1000));
             setProgress(percentage);
             if(percentage===100){
                setTimeout(() => {}, 5000);
                setvideoUploadPage(false);
             }
        }
    }
    const uploadVideoFile = () => {
        if (!Title) {
            alert("Please Enter Title of The Video ")
        }
        else if (!VideoFile) {
            alert("Please Attach Video File")
        }
        else if (VideoFile.size > 1000000) {
            alert("File Size Is Too Large ( File Size Less Than 1mb ) ")
        }
        else {
            const fileData = new FormData();
            fileData.append("file", VideoFile);
            fileData.append("title", Title);
            fileData.append("uploader", CurrentUser?.result.name);
            fileData.append("chanel", CurrentUser?.result._id);
            console.log("videofile log"+VideoFile);
            dispatch(uploadVideo({
                fileData: fileData, 
                fileOptions: fileOptions
            }));
        }
    }
    return (
        <div className='container-videoupload'>
            <input type="submit" value={"X"} onClick={()=>setvideoUploadPage(false)} className='ibtn-x' />
            <div className="container2-videoupload">
                <div className='ibox-div-videoupload'>
                    <input type="text" maxLength={30} placeholder='Enter Your Video Title' className='ibox-videoupload' onChange={(e) => { setTitle(e.target.value) }} />
                    <label htmlFor="file" className='ibox-videoupload btn-videoupload'>
                        <input type="file" name="file" className='ibox-videoupload' style={{ fontSize: "1rem" }} onChange={(e) => { handleSetVideoFile(e) }} />
                    </label>
                </div>
                <div className='ibox-div-videoupload'>
                    <input type="submit" value="Upload" onClick={()=>uploadVideoFile()} className='ibox-videoupload btn-videoupload' />
                </div>
                <div className='loader ibox-div-videoupload'>
                    <CircularProgressbar 
                        value={Progress} 
                        text={`${Progress}`} 
                        styles={buildStyles({
                            rotation:0.25,
                            strokeLinecap:"butt",
                            textSize:"20px",
                            pathTransitionDuration:0.5,
                            pathColor:`rgba(255,255,255,${Progress/100})`,
                            textColor:"#f88",
                            trailColor:"#adff2f",
                            backgroundColor:"#3e98c7"
                        })} 
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoUpload