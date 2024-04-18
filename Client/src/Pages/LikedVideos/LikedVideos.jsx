import React from 'react'
// import vid from '../../Components/Videos/vid.mp4';
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';

function LikedVideos() {
  const likedVideoList=useSelector(state=>state.likeVideoReducer);
  // console.log(likedVideoList);
  // const likedvideos = [
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
  // ];

  return (
    <>
      <WHL page={"Liked Video"} videoList={likedVideoList} />
    </>
  )
}

export default LikedVideos