import React from 'react';

import './MissionsFilter.css';

const MissionsFilter = (prop) => {
    const filterChangeHandler = (event) =>{
        return prop.onPickedDate(event.target.value);
    };

    return (
        <div className='missions-filter'>
            <div className='missions-filter__control'>
                <label>Filter by year</label>
                <select value={prop.selected} onChange={filterChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default MissionsFilter;