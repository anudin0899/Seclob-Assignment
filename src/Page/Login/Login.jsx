import React from 'react';
import './Login.css'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from 'react-router-dom';
import google from '../../Assets/Images/google-icon 1.png'


const Login = () => {

    const navigate = useNavigate();
    return (
        <div className="login_wrapper">
            <span className='bg-animate'></span>
            <div className="login">
                <div className="login-left">
                    <div className='top-section'>
                        <div className='logo'>
                            <span><TimelineRoundedIcon className='logo-icon' /></span>
                        </div>
                    </div>

                    <div className='middle-section'>
                        <h1>Base</h1>
                    </div>

                    <div className='bottom-section'>
                        <span><GitHubIcon className='icon' /></span>
                        <span><TwitterIcon className='icon' /></span>
                        <span><FacebookRoundedIcon className='icon' /></span>
                        <span><InstagramIcon className='icon' /></span>
                    </div>

                </div>
                <div className="login-right">
                    <div className='login-row flex'>
                        <h1>SignIn</h1>
                        <span>Sign in to your account</span>
                    </div>
                    <div className=' login-row '>
                        <div className='login-by-icon'>
                            <span><img src={google} alt="" className='icon' /></span>
                            <span>Sign in with google</span>
                        </div>
                        <div className='login-by-icon'>
                            <AppleIcon className='icon' />
                            <span>Sign in with apple</span>
                        </div>
                    </div>

                    <div className='login-row'>
                        <div className='login-by-cred'>
                            <div className='login-box'>
                                <form >
                                    <div className='form-input'>
                                        <label htmlFor="">Email address</label>
                                        <input type="text" placeholder='email address' />
                                    </div>
                                    <div className='form-input'>
                                        <label htmlFor="">Password</label>
                                        <input type="password" placeholder='password' />
                                    </div>
                                    <div className='form-input'>
                                        <span>Forgot password ?</span>
                                    </div>
                                    <div className='form-input'>
                                        <button  onClick={() =>navigate('/dashboard')}>Sign In</button>
                                    </div>
                                </form>

                            </div>

                            <div className='signup'>
                                <span>Don't have an account ?</span>
                                <span>Register here</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login