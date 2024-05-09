import React, { useEffect, useState } from 'react';
import "./Upload.css"
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import UploadFrame from '../../components/UploadFrame/UploadFrame';
import Table from '../../components/Table/Table';


const Home = () => {

    const [inactive, setInactive] = useState(true);

    return (
        <div className="page_wrapper">
            <div className="home">
                {inactive ? <Sidebar /> : null}

                <div className={`homeContainer ${inactive ? `homeContainer` : 'non_inactive'}`}>
                    <Header title='Upload CSV' onCollapse={(inactive) => setInactive(inactive)} />
                    <div className='row'>
                        <UploadFrame />
                    </div>
                    <div className='row'>
                        <Table title="Upload" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;