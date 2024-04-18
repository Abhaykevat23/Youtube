import React from 'react'
import LeftSidebar from '../Leftsidebar/LeftSidebar'
import './WHLcss.css'
import WHLVideoList from './WHLVideoList'
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../../actions/History';
function WHL({ page, videoList }) {
    const CurrentUser = useSelector(state => state?.currentUserReducer);
    // console.log(videoList);
    const dispatch = useDispatch();
    const handleClearHistory = () => {
        if (CurrentUser) {
            dispatch(
                clearHistory({
                    userId: CurrentUser?.result._id
                })
            )
        }
    }
    return (
        <div className='container-pages-app'>
            <LeftSidebar />
            <div className='container2-pages-app'>
                <p className='container-whl'>
                    <div className='box-WHL leftside-whl'>
                        <b>Your {page} Shown Here </b>
                        {
                            page === "History" &&
                            <div className="clear-history-btn" onClick={() => handleClearHistory()}> Clear History </div>
                        }
                    </div>
                    <div className='rightside-whl'>
                        <h1>{page}</h1>
                        <div className='whl-list'>
                            <WHLVideoList
                                page={page}
                                CurrentUser={CurrentUser?.result._id}
                                videoList={videoList}
                            />
                        </div>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default WHL