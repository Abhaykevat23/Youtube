import React from 'react'
import './Showvideo.css'
import { Link } from 'react-router-dom'
import moment from 'moment'

function ShowVideo({vid}) {
  // console.log(vid?.uploader);
  return (
    <>
        <Link to={`/videopage/${vid?._id}`}>
            <video src={`http://localhost:5500/${vid?.filePath}`} className='video-showvideo' />
        </Link>
        <div className='video-description'> 
          <div className="chanel-logo-app">
            <div className='fstchar-logo-app'>
              <>{ vid?.uploader?.charAt(0).toUpperCase() }</>
            </div>
          </div>
          <div className='video-details'>
            <p className='title-vid-showvideo'>{vid?.videoTitle}</p>
            <pre className='vid-views-uploadtime'>{vid?.uploader}</pre>
            <pre className='vid-views-uploadtime'>
              {vid?.Views} views <div className="dot"></div>  Uploaded {moment(vid?.createdAt).fromNow()}
            </pre>
          </div>
        </div>
    </>
  )
}

export default ShowVideo