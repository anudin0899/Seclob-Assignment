import React, { useEffect, useState } from 'react';
import "./Dashboard.css"
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';


const Dashboard = () => {

    const [inactive, setInactive] = useState(false);

    return (
        <div className="page_wrapper">
            <div className="home">
                <Sidebar onCollapse={(inactive) => setInactive(inactive)} />
                <div className={`homeContainer ${inactive ? `Con_inactive` : ''}`}>
                    <Header title='Dashboard' />

                </div>
            </div>
        </div>
    )
}

export default Dashboard;