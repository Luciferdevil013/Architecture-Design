import React, { useState } from 'react';
import Sktrech from './Assets/hand.jpg';
import Filter from './Compoents/FilterButton';
import Show from './Compoents/Show';

function Project() {
    const [active,setactive] = useState('1');

    return (
        <div className="projectSection">
            <div className='projectLeft'>
                <h2 className='h2-heading'>Innovating Spaces, Inspiring Lives.</h2>

                <img className='projectLeftImg' src={Sktrech} alt="" />

                <div className='projectLeftBottom'>
                    <p className='paragraph'>
                        Discover the synergy of design and purpose with Innovating Spaces,Inspiring Lives. Our Visionary approach reshapes environments, fostering creativity, growth, and a renewed zest for life. Join us in crafting transformative spaces where every corner reflects the essence of inspiration.
                    </p>

                    <button className='button2'>Learn More</button>
                </div>


            </div>
            <div className="projectShowcase">
                <h1 className='h1-heading'>Featured Project</h1>

                <div className='projectShowFilter'>
                    <Filter id='1' setactive={setactive} active={active} Name={'All Project'} />
                    <Filter id='2' setactive={setactive} active={active} Name={'Commerical'} />
                    <Filter id='3' setactive={setactive} active={active} Name={'Residential'} />
                    <Filter id='4' setactive={setactive} active={active} Name={'Healthcare'} />
                </div>

                <div className='projectShow'>
                    <Show />
                    <Show />
                    <Show />
                    <Show />
                </div>
            </div>
        </div>
    )
}

export default Project