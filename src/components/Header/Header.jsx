import React, { useEffect, useState } from 'react'
import './Header.css';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import user from '../../Assets/Images/image 1.png'

const Header = ({ title, onCollapse }) => {
    const [inactive, setInactive] = useState(true);

    useEffect(() => {
        onCollapse(inactive);
    }, [inactive, onCollapse])

    return (
        <div className="Header">
            <div className="wrapper">
                <div className="left">
                    <span className='hideBtn' onClick={() => setInactive(!inactive)}><DehazeOutlinedIcon /></span>
                    <h1>{title}</h1>
                </div>
                <div className="right">
                    <span><NotificationsRoundedIcon /></span>
                    <span className='imageIcon'><img src={user} alt="" className='icon' /></span>
                </div>
            </div>
        </div>
    )
}

export default Header