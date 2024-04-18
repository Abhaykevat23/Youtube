import React from 'react'
import './Auth.css'
import { GoogleLogout } from 'react-google-login'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'
import { Link } from 'react-router-dom'

function Auth({ User, setAuthBtn, setEditCreateChanelBtn }) {
    const dispatch = useDispatch();
    const onLogoutSuccess = () => {
        dispatch(setCurrentUser(null));
        alert("Logout Successfull")
    }

    return (
        <div className='auth-container' onClick={() => setAuthBtn(false)}>
            <div className='auth-container2'>
                <p className='user-details'>
                    <div className='chanel-logo-app'>
                        <p className='fstchar-logo-app'>
                            {
                                User?.result.name ?
                                    (<>
                                        {User?.result.name.charAt(0).toUpperCase()}
                                    </>)
                                    :
                                    (<>
                                        {User?.result.email.charAt(0).toUpperCase()}
                                    </>)
                            }
                        </p>
                    </div>
                    <div className='email-auth'>{User?.result.email}</div>
                </p>
                <div className='btns-auth'>
                    {
                        User?.result.name ? <>
                        {
                            <Link to={`/chanelpage/${User?.result._id}`} className='btn-auth'>
                                Your Chanel
                            </Link>
                        }
                        </> : <>
                            <input type="submit" className='btn-auth' value="Create Your Chanel" onClick={() => setEditCreateChanelBtn(true)} />

                        </>
                    }

                    <div>
                        <GoogleLogout
                            clientId={
                                "980120621215-u5i8gltbd6hbnp8l9huj53ccpr8g3cml.apps.googleusercontent.com"
                            }
                            onLogoutSuccess={onLogoutSuccess}
                            render={(renderProps) => (
                                <div onClick={renderProps.onClick} className='btn-auth'>
                                    <BiLogOut />
                                    Log Out
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth