import './App.css';
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/Leftsidebar/DrawerSidebar';
import Navbar from './Components/Navbar/Navbar'
// import Home from './Pages/Home/Home';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import CreateEditChanel from './Pages/Chanel/CreateEditChanel';
import { useDispatch } from 'react-redux';
import { fetchAllChanel } from './actions/chanelUser';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAllLikedVideo } from './actions/likedVideo';
import { getAllWatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAllLikedVideo());
    dispatch(getAllWatchLater());
    dispatch(getAllHistory());
    
  },[dispatch])

  const [toggleDrawerSidebar, settoggleDrawerSidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      settoggleDrawerSidebar({
        display:"flex",
      })
    }
    else{
      settoggleDrawerSidebar({
        display:"none"
      })
    }
  }

  const [videoUploadPage, setvideoUploadPage] = useState(false)
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false)
  return (
    <>
      <Router>
        {
          videoUploadPage && <VideoUpload setvideoUploadPage={setvideoUploadPage} />
        }
        {
          EditCreateChanelBtn && <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn} />
        }
        <Navbar
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          toggleDrawer={toggleDrawer}
        />
        {
          <DrawerSidebar
            toggleDrawer={toggleDrawer}
            toggleDrawerSidebar={toggleDrawerSidebar}
          />
        }
        <AllRoutes setvideoUploadPage={setvideoUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn} />
      </Router>
    </>
  );
}

export default App;
