import React, { useEffect ,useState} from 'react'
import './Navbar.css'
import logo from './logo.ico'
import Searchbar from './Searchbar'
import { RiVideoAddLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import Auth from '../../Pages/Auth/Auth';

function Navbar({ toggleDrawer ,setEditCreateChanelBtn}) {

  const [AuthBtn, setAuthBtn] = useState(false)

  // const CurrentUser = null;
  // const CurrentUser = {
  //   result:{
  //     email:"abhaykevat23@gmail.com",
  //     joinedon:"twgug2t92yet2bdwq",
  //   },
  // };

  const CurrentUser = useSelector(state => state.currentUserReducer);
  console.log(CurrentUser);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "980120621215-u5i8gltbd6hbnp8l9huj53ccpr8g3cml.apps.googleusercontent.com",
        scope: "email"
      })
    }
    gapi.load("client:auth2", start)
  }, []);

  const dispatch = useDispatch();
  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({ email: Email }))
  }
  const onFailure = (response) => {
    console.log("Failure", response);
  }
  
  return (
    <>
      <div className='Container-navbar'>
        <div className="burger-logo-navbar">
          <div className='burger' onClick={() => toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to={'/'} className='logo-div-navbar'>
            <img src={logo} alt="logo" height={30} className='logo-image' />
            <p className='logo-title'>Youtube</p>
          </Link>
        </div>
        <Searchbar />
        <RiVideoAddLine size={22} className={"vid-bell-nav"} />
        <div className="appboxes">
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className="vid-bell-nav" />
        <div className="auth-cont-navbar">
          {
            CurrentUser ? (
              <>
                <div className="chanel-logo-app" onClick={()=>setAuthBtn(true)}>
                  <p className="fstchar-logo-app">
                    {
                      CurrentUser?.result.name ? (
                        <>
                          {CurrentUser?.result.name.charAt(0).toUpperCase()}
                        </>
                      ) : (
                        <>
                          {CurrentUser?.result.email.charAt(0).toUpperCase()}
                        </>
                      )
                    }
                  </p>
                </div>
              </>)
              :
              (<>
                <GoogleLogin
                  clientId={
                    "980120621215-u5i8gltbd6hbnp8l9huj53ccpr8g3cml.apps.googleusercontent.com"
                  }
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  render={(renderProps) => (
                    <p onClick={renderProps.onClick} className="auth-button">
                      <BiUserCircle size={22} />
                      <b>Sign-in</b>
                    </p>
                  )}
                />

              </>)
          }
        </div>
      </div>
      {
        AuthBtn &&
        <Auth 
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          setAuthBtn={setAuthBtn}
          User={CurrentUser}
        />
      }
    </>
  )
}

export default Navbar