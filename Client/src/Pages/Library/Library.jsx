import React from 'react'
// import LeftSidebar from '../../Components/Leftsidebar/LeftSidebar';
import WHLVideoList from '../../Components/WHL/WHLVideoList';
import './Library.css'
import vid from '../../Components/Videos/vid.mp4';
import { FaHistory } from 'react-icons/fa'
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { useSelector } from 'react-redux';
function Library() {
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     title: "video 1",
  //     uploader: "shivam",
  //     description: "description of video 1"
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     title: "video 2",
  //     uploader: "deep",
  //     description: "description of video 2"
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     title: "video 3",
  //     uploader: "abhay",
  //     description: "description of video 3"
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     title: "video 4",
  //     uploader: "pranay",
  //     description: "description of video 4"
  //   }
  // ]

  const CurrentUser = useSelector(state => state?.currentUserReducer);
  const watchLaterList=useSelector(state=>state.watchLaterReducer);
  const historyList=useSelector(state=>state.HistoryReducer);
  const likedVideoList=useSelector(state=>state.likeVideoReducer);


  return (
    <div className='container-pages-app'>
      <div className='container2-pages-app'>
        <div className="container-librarypage">
          <h1 className='title-container-librarypage'>
            <b> <FaHistory /> </b>
            <b>History</b>
          </h1>
          <div className="container-videolist-librarypage">
            <WHLVideoList page={"History"} CurrentUser={CurrentUser?.result._id} videoList={historyList} />
          </div>
        </div>

        <div className="container-librarypage">
          <h1 className='title-container-librarypage'>
            <b> <MdOutlineWatchLater /> </b>
            <b>Watch Later</b>
          </h1>
          <div className="container-videolist-librarypage">
            <WHLVideoList page={"Watch Later"} CurrentUser={CurrentUser?.result._id} videoList={watchLaterList} />
          </div>
        </div>

        <div className="container-librarypage">
          <h1 className='title-container-librarypage'>
            <b> <AiOutlineLike /> </b>
            <b>Liked Videos</b>
          </h1>
          <div className="container-videolist-librarypage">
            <WHLVideoList page={"Liked Videos"} CurrentUser={CurrentUser?.result._id} videoList={likedVideoList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library