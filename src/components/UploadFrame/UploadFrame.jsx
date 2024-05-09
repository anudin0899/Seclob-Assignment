import React from 'react'
import './UploadFrame.css'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import execlIcon from '../../Assets/Images/Microsoft_Office_Excel_(2019–present) 1.png'

const UploadFrame = () => {
    return (
        <div className='box'>

            <form action="submit">
                <div className='form-image'>
                    <label htmlFor="file-input">
                        <img src={execlIcon} alt="" />
                    </label>
                    <input
                        type="file"
                        id="file-input"
                    />
                    <p>Drop your excel sheet here or <label htmlFor="file-input" className='link'>Browse</label></p>
                </div>

                <div className='form-button'>
                    <span><FileUploadOutlinedIcon /></span>
                    <button>Upload</button>
                </div>
            </form>



        </div>
    )
}

export default UploadFrame