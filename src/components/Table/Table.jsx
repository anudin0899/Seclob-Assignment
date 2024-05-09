import React, { useState } from 'react'
import './Table.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Select from '../Select/Select';

const Table = ({ title, excelData, updateExcelData }) => {


    const [selectedTags, setSelectedTags] = useState([]);


    const handleSelection = (selectedOption, rowIndex) => {
        const updatedData = excelData.map((row, index) => {
            if (index === rowIndex) {
                const selectedTags = row[4] ? row[4]?.split(",") : [];
                selectedTags.push(selectedOption);
                const updatedTags = selectedTags.join(",");
                return [...row.slice(0, 4), updatedTags];
            }
            return row;
        });
        setSelectedTags([...selectedTags, { tag: selectedOption, i: rowIndex }]);
        updateExcelData(updatedData);
    };

    const cleartag = (tagIndex, rowData, rowIndex) => () => {
        const updatedTags = rowData[4]?.split(',').filter((_, index) => index !== tagIndex).join(',');
        const updatedData = excelData.map((row, index) => {
            if (index === rowIndex) {
                return [...row.slice(0, 4), updatedTags];
            }
            return row;
        });
        setSelectedTags(selectedTags.filter(({ i }) => i !== rowIndex));
        updateExcelData(updatedData);
    };

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
                        {excelData?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td >{item[0]}</td>
                                    <td className="link">{item[1]} </td>
                                    <td>{item[2]}</td>
                                    <td> <Select options={item[3] ? item[3] : []} handleSelection={(option) => handleSelection(option, index)} /></td>

                                    <td className='tag-wrap'>
                                        {item[4] && (
                                            <div>
                                                {
                                                    item[4].split(',').map((tag, i) => (
                                                        <div className='tags' key={i}>
                                                            <span>{tag.trim()}</span>
                                                            <span onClick={cleartag(i, item, index)}><CloseOutlinedIcon className='icon' /></span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div></div>
    )
}

export default Table