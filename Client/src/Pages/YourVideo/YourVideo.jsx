import React from 'react'
import LeftSidebar from '../../Components/Leftsidebar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
// import vid from '../../Components/Videos/vid.mp4';
import './YourVideo.css'
import { useSelector } from 'react-redux';

function YourVideo() {
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
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q.videoChanel === CurrentUser?.result._id).reverse();
  

  return (
    <div className='container-pages-app'>
      <LeftSidebar />
      <div className='container2-pages-app'>
        <div className="container-yourvideo">
        <h1>Your Video</h1>
        {
          CurrentUser ? (<>
            <ShowVideoGrid vids={vids} />
          </>):(<>
            <h3>Please Login To see your Uploaded Videos.</h3>
          </>)
        }
        </div>
      </div>
    </div>
  )
}

export default YourVideo