import React, { useEffect, useState } from 'react';
import "./Upload.css"
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import UploadFrame from '../../components/UploadFrame/UploadFrame';
import Table from '../../components/Table/Table';


const Home = () => {

    const [inactive, setInactive] = useState(true);
    const [excelFile, setExcelFile] = useState(null);


    const updateExcelData = (updatedData) => {
        setExcelFile(updatedData);
    };


    return (
        <div className="page_wrapper">
            <div className="home">
                {inactive ? <Sidebar /> : null}

                <div className={`homeContainer ${inactive ? `homeContainer` : 'non_inactive'}`}>
                    <Header title='Upload CSV' onCollapse={(inactive) => setInactive(inactive)} />
                    <div className='section-row'>
                        <UploadFrame Data={setExcelFile}/>
                    </div>
                    <div className='section-row'>
                        <Table title="Upload" excelData={excelFile} updateExcelData={updateExcelData}/>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home;