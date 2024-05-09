import React from 'react'
import './Table.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Table = ({ title }) => {
    return (
        <div className='table-wrap'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div className="table-data">
                <table id="myTable">
                    <thead>
                        <tr>
                            <th >SI.No</th>
                            <th>Link</th>
                            <th>Prefix</th>
                            <th>Add Tags</th>
                            <th>Selected Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >01</td>
                            <td className="link">arun@gmail.com </td>
                            <td>arun</td>
                            <td> </td>
                            <td className='tag-wrap'>
                                <div className='tags'>
                                    <span>Tag 1</span>
                                    <span><CloseOutlinedIcon className='icon'/></span>
                                </div>
                                <div className='tags'>
                                    <span>Tag 1</span>
                                    <span><CloseOutlinedIcon className='icon'/></span>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div></div>
    )
}

export default Table