import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
// import vid from '../../Components/Videos/vid.mp4';
import { useSelector } from 'react-redux';

function ShowVideoList({videoid}) {
    const vids=useSelector(s=>s.videoReducer)
    // console.log(vids);
    // const vids = [
    //     {
    //         _id: 1,
    //         video_src: vid,
    //         title: "video 1",
    //         uploader: "shivam",
    //         description: "description of video 1"
    //     },
    //     {
    //         _id: 2,
    //         video_src: vid,
    //         title: "video 2",
    //         uploader: "deep",
    //         description: "description of video 2"
    //     },
    //     {
    //         _id: 3,
    //         video_src: vid,
    //         title: "video 3",
    //         uploader: "abhay",
    //         description: "description of video 3"
    //     },
    //     {
    //         _id: 4,
    //         video_src: vid,
    //         title: "video 4",
    //         uploader: "pranay",
    //         description: "description of video 4"
    //     }
    // ]

    // 10:00 minutes

    return (
        <>
            <div className='container-showvideo-grid'>
                {
                    vids?.data?.filter(q=>q._id===videoid).map(vi => {
                        return (
                            <div key={vi._id} className='videobox-app'>
                                <ShowVideo vid={vi} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShowVideoList