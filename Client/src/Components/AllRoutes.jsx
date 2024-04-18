import React from 'react'
import Home from '../Pages/Home/Home'
import {
    // BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Library from '../Pages/Library/Library';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import LikedVideos from '../Pages/LikedVideos/LikedVideos';
import WatchLater from '../Pages/WatchLater/WatchLater';
import YourVideo from '../Pages/YourVideo/YourVideo';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Chanel from '../Pages/Chanel/Chanel';
import Search from '../Pages/Search/Search';

function AllRoutes({setEditCreateChanelBtn,setvideoUploadPage}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/library' element={<Library/>} />
        <Route path='/history' element={<WatchHistory/>} />
        <Route path='/watchlater' element={<WatchLater/>} />
        <Route path='/likedvideo' element={<LikedVideos />} />
        <Route path='/yourvideo' element={<YourVideo/>} />
        <Route path='/videopage/:vid' element={<VideoPage/>} />
        <Route path='/search/:SearchQuery' element={<Search/>} />
        <Route path='/chanelpage/:cid' 
          element={
            <Chanel 
              setvideoUploadPage={setvideoUploadPage}
              setEditCreateChanelBtn={setEditCreateChanelBtn} 
            />
          } 
        />
        
    </Routes>
  )
}

export default AllRoutes