import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { NavLink } from 'react-router-dom';

const menuItem = [
    {
        name: 'Dashboard',
        icon: <GridViewRoundedIcon />,
        to: '/dashboard',
        
    },
    {
        name: 'Upload',
        icon: <AssessmentRoundedIcon />,
        to: '/upload',

    },
    {
        name: 'Invoice',
        icon: <SpaceDashboardRoundedIcon />,
        to: '/',
    },
    {
        name: 'Shedule',
        icon: <InsertDriveFileRoundedIcon />,
        to: '/',
    },
    {
        name: 'Calender',
        icon: <CalendarMonthRoundedIcon />,
        to: '/',
    },
    {
        name: 'Notifications',
        icon: <NotificationsRoundedIcon />,
        to: '/',
    },
    {
        name: 'Settings',
        icon: <SettingsRoundedIcon />,
        to: '/',
    },
]

const Sidebar = () => {



    return (
        <div className="side-menu">

            <div className='top-section'>
                <div className='logo'>
                    <span><TimelineRoundedIcon /></span>
                    <h1>Base</h1>
                </div>
            </div>

            <div className="main-menu">

                <ul>
                    {menuItem.map((menuItems, index) => (
                        <li key={index}>
                            <NavLink className='link menu-item' exact={menuItems?.exact} to={menuItems?.to}>
                                <div className='menu-icon icon'>{menuItems.icon}</div>
                                <span>{menuItems.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </div>


        </div>
    )
}

export default Sidebar