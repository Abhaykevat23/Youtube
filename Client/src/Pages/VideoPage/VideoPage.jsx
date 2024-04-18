import React, { useEffect } from 'react'
// import vid from '../../Components/Videos/vid.mp4';
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../../Components/Comments/Comments';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { Link } from 'react-router-dom';
import { addToHistory } from '../../actions/History';
import { viewVideo } from '../../actions/video';

function VideoPage() {
    const {vid}=useParams();

    const vids=useSelector(state=>state.videoReducer);
    const vv=vids?.data.filter((q)=> q._id === vid)[0];
    const CurrentUser = useSelector(state => state?.currentUserReducer);
    const dispatch = useDispatch();

    const handleHistory=()=>{
        dispatch(
            addToHistory({
                videoId: vid,
                Viewer: CurrentUser?.result._id
            })
        );
    }

    const handleViews=()=>{
        dispatch(
            viewVideo({
                id:vid
            })
        )
    }
    useEffect(() => {
      if(CurrentUser){
        // eslint-disable-next-line
        handleHistory();
        handleViews();
      }
    },[])
    

    return (
        <>
            <div className='container-videopage'>
                <div className='container-videopage2'>
                    <div className='video-display-screen-videopage' >
                        <video 
                            src={`https://youtube-server-snowy.vercel.app/${vv?.filePath}`}
                            // src={vid}
                            className={"video-showvideo-videopage"}
                            controls
                            // autoPlay
                        ></video>
                        <div className='video-detail-videopage'>
                            <div className='videoBtn-title-videopage-container'>
                                <p className='video-title-videopage'> {vv?.videoTitle} </p>     
                                <div className='views-date-btns-videopage'>
                                    <div className='views-videopage'>
                                        {vv?.Views} views <div className="dot"></div> Uploaded {moment(vv?.createdAt).fromNow()}
                                    </div>
                                    <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                                </div>
                            </div>


                            <Link to={`/chanelpage/${vv?.videoChanel}`} className='chanel-detail-videopage'>
                                <b className='chanel-logo-videopage'>
                                    <p>{ vv?.uploader?.charAt(0).toUpperCase() }</p>
                                </b>
                                <p className='chanel-name-videopage' > {vv?.uploader}</p>
                            </Link>
                            <div className='comments-videopage'>
                                <h2><u> comments </u> </h2>
                                <Comments videoId={vv?._id}/>
                            </div>
                        </div>
                    </div>
                    <div className='morevideobar'>
                        more video
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPage