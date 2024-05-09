import React, { useState } from 'react'
import './Select.css';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Select = ({ options, handleSelection }) => {

    const optionsArray = options?.split(", ");

    const [openSelect, setOpenSelect] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const selectValue = (e) => {
        const selectedOption = e.target.outerText;
        setSelectedOptions([...selectedOptions, selectedOption]);
        handleSelection(selectedOption);
        setOpenSelect(false);
    };

    return (
        <div className='select-wrap'>
            <div className='selectOption'>
                <input
                    type="text"
                    id='league'
                    onClick={() => { setOpenSelect(!openSelect) }}
                    placeholder='Task'
                    readOnly
                />

                <span   onClick={() => { setOpenSelect(!openSelect) }} className={openSelect ? "icon active" : "icon"}>
                    <ExpandMoreOutlinedIcon />
                </span>

                <div className={openSelect ? "options active" : "options"}>
                    {optionsArray.map((item, index) => {
                        return (
                            <li key={index} onClick={selectValue}>{item}</li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Select