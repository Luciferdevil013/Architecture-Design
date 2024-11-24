import React from 'react';
import Person from './Assets/Person.jpg';
import Map from './Assets/map.jpg'

function Footer() {
  return (
    <div className='footer'>
        <div className='talkSection'>

            <h1 className='h1-heading'>
                Lets talk about your project
            </h1>
            <div className='talkdetails'>
                <p className='paragraph'>
                    Need a qucik response? Our sales consulants are ready to help, when you need it.
                </p>

                <div className='footerCall'>
                    <img className='callImg' src={Person} alt="" />
                    <div className='callDetails'>
                        <h4 className='h4-heading'>Say Hi!</h4>
                        <h4 className='h4-heading'>+44 070 2485 7832</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='contactDetails'>
            <div className='textContactDetails'>
                <div className='email'>
                    <h5 className='h5-heading'>Email address</h5>
                    <h1 className='h2-heading'>Contact@mosaic.com</h1>
                </div>
                <div className='phone'>
                    <h5 className='h5-heading'>Contact number</h5>
                    <h2 className='h2-heading'>+04407024857421</h2>
                    <h2 className='h2-heading'>+04407024857421</h2>
                </div>
            </div>
            <div className='mapDetails'>
                <img src={Map} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer