import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Page/Login/Login';
import { Upload } from '@mui/icons-material';

const UploadPage = lazy(() => import('../Page/Upload/Upload'));
const DashboardPage = lazy(() => import('../Page/Dashboard/Dashboard'));

const Routing = () => {
    return (
        <Router>
            <Suspense fallback={<div className='flex'>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/upload' element={<UploadPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default Routing;