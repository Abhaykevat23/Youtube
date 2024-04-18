import React from 'react'
import './Home.css';
import LeftSidebar from '../../Components/Leftsidebar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
import { useSelector } from 'react-redux';
function Home() {

  const vids = useSelector(state => state.videoReducer)?.data?.filter(q => q).reverse();

  const Navlist = [
    "All",
    "Python",
    "JAVA",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy",
  ]

  return (
    <div className='container-pages-app'>
      <LeftSidebar />
      <div className='container2-pages-app'>
        <div className='navigation-home'>
          {
            Navlist.map(m => {
              return (<p key={m} className='btn-nav-home'> {m} </p>)
            })
          }
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  )
}

export default Home