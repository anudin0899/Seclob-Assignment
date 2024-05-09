import React, { useState } from 'react'
import './UploadFrame.css'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import execlIcon from '../../Assets/Images/Microsoft_Office_Excel_(2019–present) 1.png'
import * as XLSX from 'xlsx';

const UploadFrame = ({ Data }) => {

    const [excelFile, setExcelFile] = useState(null);
    const [typeError, setTypeError] = useState(null);
    const [excelData, setExcelData] = useState(null)

    const handleFile = (e) => {
        let fileTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv', 'application/vnd.ms-excel']
        let selectedFile = e.target.files[0];
        if (selectedFile) {

            if (selectedFile && fileTypes.includes(selectedFile.type)) {
                setTypeError(null);
                let reader = new FileReader();
                reader.readAsBinaryString(selectedFile);
                reader.onload = (evt) => {
                    setExcelFile(evt.target.result);
                }
            } else {
                setTypeError('please select only excel file');
                setExcelFile(null);
            }
        } else {
            console.log("please select ypur file");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (excelFile !== null) {
            const wb = XLSX.read(excelFile, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            setExcelData(data);
            Data(data.slice(1))
        }
    }


    // const handleFile = (e) => {
    //     var selectedFile = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = (evt) => { // evt = on_file_select event
    //         /* Parse data */
    //         const bstr = evt.target.result;
    //         const wb = XLSX.read(bstr, { type: 'binary' });
    //         /* Get first worksheet */
    //         const wsname = wb.SheetNames[0];
    //         const ws = wb.Sheets[wsname];
    //         /* Convert array of arrays */
    //         const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    //         /* Update state */
    //         // console.log("Data>>>" + data);
    //         setExcelData(data)
    //         Data(data)
    //     };
    //     reader.readAsBinaryString(selectedFile);
    // }
    // console.log(excelFile, "excel file");
    // console.log(excelData, "data");

    return (
        <div className='box'>

            <form >
                <div className='form-image'>
                    <label htmlFor="file-input">
                        <img src={execlIcon} alt="" />
                    </label>
                    <input
                        type="file"
                        id="file-input"
                        required
                        onChange={handleFile}
                    />
                    <p>Drop your excel sheet here or <label htmlFor="file-input" className='link'>Browse</label></p>
                    {typeError && <p className='alert'>{typeError}</p>}
                </div>

                <div className='form-button' onClick={handleSubmit}>
                    <span><FileUploadOutlinedIcon /></span>
                    <button >Upload</button>
                </div>
            </form>



        </div>
    )
}

export default UploadFrame