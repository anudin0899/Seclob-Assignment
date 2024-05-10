import React, { useState } from 'react';
import "./Dashboard.css"
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';


const Dashboard = () => {

    const [inactive, setInactive] = useState(true);

    return (
        <div className="page_wrapper">
            <div className="home">
                {inactive ? <Sidebar /> : null}
                <div className={`homeContainer ${inactive ? `homeContainer` : 'non_inactive'}`}>
                    <Header title='Dashboard' onCollapse={(inactive) => setInactive(inactive)} />

                </div>
            </div>
        </div>
    )
}

export default Dashboard;