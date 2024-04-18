import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import shorts from './logo.ico'
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from 'react-icons/md';
import './LeftSlidebar.css';
import { NavLink } from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className='container-leftsidebar'>
        <NavLink to={'/'} className='icon-slidebar-div'>
            <AiOutlineHome size={22} className='icon-slidebar' />
            <div className='text-slidebar-icon'>Home</div>
        </NavLink>

        <div className='icon-slidebar-div'>
            <MdOutlineExplore size={22} className='icon-slidebar' />
            <div className='text-slidebar-icon'>Explore</div>
        </div>

        <div className='icon-slidebar-div'>
            <img src={shorts} width={22} className='icon-slidebar' />
            <div className='text-slidebar-icon'>Shorts</div>
        </div>
        
        <div className='icon-slidebar-div'>
            <MdOutlineSubscriptions size={22} className='icon-slidebar' />
            <div className='text-slidebar-icon' style={{fontSize:"12px"}}>Subscriptions</div>
        </div>

        <NavLink to={'/library'} className='icon-slidebar-div'>
            <MdOutlineVideoLibrary size={22} className='icon-slidebar' />
            <div className='text-slidebar-icon'>Library</div>
        </NavLink>
    </div>
  )
}

export default LeftSidebar