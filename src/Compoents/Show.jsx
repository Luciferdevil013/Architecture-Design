import React from 'react';
import show1 from '../Assets/show1.avif';
import { GoArrowUpRight } from "react-icons/go";

function Show() {
    return (
        <div className='show'>
            <div className='showImg'>
                <img src={show1} alt="" />
            </div>
            <div className="showDetails">
                <div className='nameDetails'>
                    <h4 className='h4-heading'>Hansen Complex</h4>
                    <h5 className='h5-heading'>2023</h5>
                </div>
                <div className='place'>
                    <p className='paragraph'>New york city</p>
                    <GoArrowUpRight />
                </div>
            </div>
        </div>
    )
}

export default Show