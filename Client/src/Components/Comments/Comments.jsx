import React, { useState } from 'react'
import './Comments.css'
import DisplayComment from './DisplayComment';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../actions/comments';

function Comments({ videoId }) {

    const [CommentText, setCommentText] = useState("");
    const CommentList = useSelector(s => s.commentReducer);
    // console.log("Comment List ::: "+CommentList);
    const CurrentUser = useSelector(state => state?.currentUserReducer);

    // const CommentList = [
    //     {
    //         _id:"1",
    //         commentbody: "hello",
    //         usercommented: "hvghxvacvjvc"
    //     },
    //     {
    //         _id:"2",
    //         commentbody: "abhay",
    //         usercommented: "hvghxvanwkbcacvjvc"
    //     },
    //     {
    //         _id:"3",
    //         commentbody: "hellodwbwdy",
    //         usercommented: "hvgh, xdjwbjxvacvjvc"
    //     }
    // ]

    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (CurrentUser) {
            if (!CommentText) {
                alert("Please Type Your Comment")
            }
            else {
                dispatch(
                    postComment({
                        videoId: videoId,
                        userId: CurrentUser?.result._id,
                        commentBody: CommentText,
                        userCommented: CurrentUser?.result.name,
                    })
                );
                setCommentText("");
            }
        }else{
            alert("Please Login To Post Comment.");
        }
    }
    return (
        <>
            <form className='comment-subform-comment' onSubmit={handleOnSubmit}>
                <input type="text" placeholder='Add Comment...' className='comment-ibox'
                    value={CommentText}
                    onChange={e => setCommentText(e.target.value)} />
                <input type="submit" value="Add" className='comment-addbtn-comment' />
            </form>
            <div className="display-comments-container">
                {
                    CommentList?.data?.filter(q => videoId === q?.videoId).reverse().map(m => {
                        return (
                            <DisplayComment
                                cid={m._id}
                                userId={m.userId}
                                commentbody={m.commentBody}
                                commentOn={m.commentOn}
                                usercommented={m.userCommented}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Comments