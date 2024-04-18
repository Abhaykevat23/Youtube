import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { BsMicFill } from 'react-icons/bs';
import './Searchbar.css'
import Searchlist from './Searchlist';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Searchbar() {
    const [SearchQuery, setSearchQuery] = useState("");
    const [SearchListA, setSearchList] = useState(false);
    const TitleArray=useSelector(s=>s?.videoReducer)
        ?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(SearchQuery?.toUpperCase())).map(m=>m?.videoTitle);
        
    // const TitleArray = ["abhay", "kevat", "shyam", "bhuva"].filter(q => q.toUpperCase().includes(SearchQuery.toUpperCase()));
    return (
        <>
            <div className="Searchbar-container">
                <div className="Searchbar-container2">
                    <div className="Search-div">
                        <input type="text" placeholder='Search' className='ibox-searchbar'
                            onChange={e => setSearchQuery(e.target.value)}
                            value={SearchQuery}
                            onClick={e => setSearchList(true)} />

                        <Link to={`/search/${SearchQuery}`} >
                            <FaSearch className='SearchIcon' onClick={e => setSearchList(false)} />
                        </Link>
                        
                        
                        <BsMicFill className='micsearchicon' />
                        {
                            SearchQuery && SearchListA &&
                            <Searchlist
                                setSearchQuery={setSearchQuery}
                                TitleArray={TitleArray} 
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbar