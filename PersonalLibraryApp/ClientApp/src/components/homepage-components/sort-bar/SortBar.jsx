import React from 'react';
import './SortBar.css'
import ArrowDown from './../../../assets/svg/arrowDown.svg'

const SortBar = () => {
    const optionsAvailable = ['Popular', 'Recent']
    return (
        <div className='sortBar'>
            <div className="sortLine"></div>
            <div className="sortText">
                <p>Sort after:</p>
                <div className='sortBarCriteria'>
                    <span>{optionsAvailable[0]}</span>
                    <img src={ArrowDown} about='Arrow_Down'/>
                </div>
            </div>
        </div>
    );
};

export default SortBar;