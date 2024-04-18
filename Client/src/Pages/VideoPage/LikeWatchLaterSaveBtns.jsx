import React, { useEffect } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { AiFillDislike, AiOutlineDislike, AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { MdPlaylistAddCheck } from 'react-icons/md';
import { RiPlayListAddFill, RiHeartAddFill, RiShareForwardLine } from 'react-icons/ri';
import './LikeWatchLaterSaveBtns.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeVideo } from '../../actions/video';
import { addToLikedVideos, deleteLikedVideo } from '../../actions/likedVideo';
import { addToWatchLater, deleteWatchLater } from '../../actions/watchLater';

function LikeWatchLaterSaveBtns({ vv, vid }) {
    const CurrentUser = useSelector(state => state?.currentUserReducer);
    const dispatch = useDispatch();
    const [SaveVideo, setSaveVideo] = useState(false);
    const [DislikeBtn, setDislikeBtn] = useState(false);
    const [LikeBtn, setLikeBtn] = useState(false);
    const likedVideoList = useSelector(state => state.likeVideoReducer);
    const watchLaterList = useSelector(state => state.watchLaterReducer);

    useEffect(() => {
        likedVideoList?.data.filter(q => q.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m => setLikeBtn(true))
        watchLaterList?.data.filter(q => q.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m => setSaveVideo(true))
    }, [])


    const toggleSaveVideo = () => {
        if (CurrentUser) {
            if (SaveVideo) {
                setSaveVideo(false);
                dispatch(deleteWatchLater({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id
                }))
            }
            else {
                setSaveVideo(true);
                dispatch(addToWatchLater({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id
                }))
            }
        } else {
            alert("Please Login To Give a Like");
        }
    }
    const toggleLikeBtn = (e, lk) => {
        if (CurrentUser) {
            if (LikeBtn) {
                setLikeBtn(false);
                dispatch(
                    likeVideo({
                        id: vid, Like: lk - 1,
                    })
                )
                dispatch(deleteLikedVideo({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id
                }));
                
            }
            else {
                setLikeBtn(true);
                dispatch(
                    likeVideo({
                        id: vid, Like: lk + 1,
                    })
                );
                dispatch(addToLikedVideos({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id
                }))
                setDislikeBtn(false);
            }
        } else {
            alert("Please Login To Give a Like");
        }
    }
    const toggleDislikeBtn = (e, lk) => {
        if (CurrentUser) {
            if (DislikeBtn) {
                setDislikeBtn(false);
            }
            else {
                setDislikeBtn(true);
                if (LikeBtn) {
                    dispatch(
                        likeVideo({
                            id: vid, Like: lk - 1,
                        })
                    );
                    dispatch(deleteLikedVideo({
                        videoId: vid,
                        Viewer: CurrentUser?.result._id
                    }));
                }
                setLikeBtn(false);
            }
        }
        else {
            alert("Please Login To Give a Like");
        }
    }
    return (
        <div className='btns-cont-videopage'>
            <div className='btn-videopage'>
                <BsThreeDots />
            </div>
            <div className='btn-videopage'>
                <div className='like-videopage' onClick={(e) => toggleLikeBtn(e, vv.Like)}>
                    {
                        LikeBtn ? (
                            <>
                                <AiFillLike size={22} className='btns-videopage' />
                            </>)
                            : (
                                <>
                                    <AiOutlineLike size={22} className='btns-videopage' />
                                </>)
                    }
                    <b> {vv?.Like}</b>
                </div>
                <div className='like-videopage' onClick={(e) => toggleDislikeBtn(e, vv.Like)}>
                    {
                        DislikeBtn ? (
                            <>
                                <AiFillDislike size={22} className='btns-videopage' />
                            </>)
                            : (
                                <>
                                    <AiOutlineDislike size={22} className='btns-videopage' />
                                </>)
                    }
                    <b> Dislike</b>
                </div>

                <div className='like-videopage' onClick={() => toggleSaveVideo()}>
                    {
                        SaveVideo ? (
                            <>
                                <MdPlaylistAddCheck size={22} className='btns-videopage' />
                                <b>Saved</b>
                            </>
                        )
                            : (
                                <>
                                    <RiPlayListAddFill size={22} className='btns-videopage' />
                                    <b>Save</b>
                                </>
                            )
                    }
                </div>

                <div className='like-videopage' >
                    <RiHeartAddFill size={22} className='btns-videopage' />
                    <b>Thanks</b>
                </div>

                <div className='like-videopage'>
                    <RiShareForwardLine size={22} className='btns-videopage' />
                    <b>Share</b>
                </div>


            </div>
        </div>
    )
}

export default LikeWatchLaterSaveBtns