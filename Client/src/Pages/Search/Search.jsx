import React from 'react'
// import './Home.css';
import LeftSidebar from '../../Components/Leftsidebar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
// import vid from '../../Components/Videos/vid.mp4';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Search() {
    const {SearchQuery}=useParams();
    const vids = useSelector((state) => state.videoReducer)?.data?.filter((q) => q?.videoTitle.toUpperCase().includes(SearchQuery.toUpperCase())).reverse();

    return (
        <div className='container-pages-app'>
            <LeftSidebar />
            <div className='container2-pages-app'>
                <h2 style={{color:"white"}}>Search Result for {SearchQuery}</h2>
                <ShowVideoGrid vids={vids} />
            </div>
        </div>
    )
}

export default Search