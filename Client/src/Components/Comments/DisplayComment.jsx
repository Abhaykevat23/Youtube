import React, { useState } from 'react'
import './Comments.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';

function DisplayComment({ cid, usercommented, commentbody, userId, commentOn }) {
    const [Edit, setEdit] = useState(false)
    const [CommentBody, setCommentBody] = useState("");
    const [cmtId, setcmtId] = useState("");
    const dispatch = useDispatch();
    const CurrentUser = useSelector(state => state?.currentUserReducer);
    

    const handleEdit = (ctid, ctbdy) => {
        setEdit(true)
        setcmtId(ctid)
        setCommentBody(ctbdy)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!CommentBody) {
            alert("Type Your Comment")
        }
        else {
            alert(cmtId);
            dispatch(editComment({
                id: cmtId,
                commentBody: CommentBody,
            }));
            setCommentBody("");
        }
        setEdit(false);
        
    }

    const handleDel=(id)=>{
        dispatch(deleteComment(id));
    }

    return (
        <>
            {
                Edit ? (<>
                    <form className='comment-subform-comment' onSubmit={handleOnSubmit} >
                        <input type="text" placeholder='Edit Comment...' className='comment-ibox'
                            onChange={e => setCommentBody(e.target.value)}
                            value={CommentBody}
                        />
                        <input type="submit" value="Change" className='comment-addbtn-comment' />
                    </form>
                </>) : (<>
                    <p className='comment-body'>{commentbody}</p>
                </>)
            }
            <p className='user-comment'> - {usercommented} commented {moment(commentOn).fromNow()}</p>
            {
                CurrentUser?.result._id === userId && (
                    <p className='editdlt-displaycomment'>
                        <i onClick={() => handleEdit(cid, commentbody)} >Edit</i>
                        <i onClick={()=> handleDel(cid) } >Delete</i>
                    </p>
                )
            }
        </>
    )
}

export default DisplayComment