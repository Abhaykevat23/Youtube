import React from 'react'
import './LeftSlidebar.css'
import shorts from './logo.ico'
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdWatchLater } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


function DrawerSidebar({toggleDrawer,toggleDrawerSidebar}) {
    return (
        <div className='container-drawer' style={toggleDrawerSidebar}>
            <div className='container-drawer2'>
                <div className='drawer-leftsidebar'>
                    <NavLink to={'/'} className='icon-slidebar-div'>
                        <p>
                            <AiOutlineHome size={22} className='icon-slidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className='text-slidebar-icon'>Home</div>
                        </p>
                    </NavLink>

                    <div className='icon-slidebar-div'>
                        <p>
                            <MdOutlineExplore size={22} className='icon-slidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className='text-slidebar-icon'>Explorer</div>
                        </p>
                    </div>

                    <div className='icon-slidebar-div'>
                        <p>
                            <img src={shorts} width={22} className='icon-slidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className='text-slidebar-icon'>Shorts</div>
                        </p>
                    </div>

                    <div className='icon-slidebar-div'>
                        <p>
                            <MdOutlineSubscriptions size={22} className='icon-slidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className='text-slidebar-icon'>Subscriptions</div>
                        </p>
                    </div>
                </div>
                <div className='libraryBtn-leftsidebar-drawer'>
                    <NavLink to={'/library'} className='icon-slidebar-div'>
                        <p>
                            <MdOutlineVideoLibrary size={22} className='icon-slidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className='text-slidebar-icon'>Library</div>
                        </p>
                    </NavLink>

                    <NavLink to={'/history'} className='icon-slidebar-div'>
                        <p>
                            <FaHistory size={22} className='icon-slidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className='text-slidebar-icon'>History</div>
                        </p>
                    </NavLink>

                    <NavLink to={'/yourvideo'} className='icon-slidebar-div'>
                        <p>
                            <AiFillPlaySquare size={22} className='icon-slidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className='text-slidebar-icon'>Your Videos</div>
                        </p>
                    </NavLink>

                    <NavLink to={'/watchlater'} className='icon-slidebar-div'>
                        <p>
                            <MdWatchLater size={22} className='icon-slidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className='text-slidebar-icon'>Watch Later</div>
                        </p>
                    </NavLink>

                    <NavLink to={'/likedvideo'} className='icon-slidebar-div'>
                        <p>
                            <AiFillLike size={22} className='icon-slidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className='text-slidebar-icon'>Liked Videos</div>
                        </p>
                    </NavLink>

                </div>
                <div className='subscriptions-lsdbar'>
                    <h3>Your Subscriptions</h3>
                    <div className='chanel-lsdbar'>
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className='chanel-lsdbar'>
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className='chanel-lsdbar'>
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className='chanel-lsdbar'>
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                </div>
            </div>
            <div className='container-drawer3' onClick={()=>toggleDrawer}>

            </div>
        </div>
    )
}

export default DrawerSidebar