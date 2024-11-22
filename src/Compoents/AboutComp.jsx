import React from 'react'

function AboutComp({ number, text}) {
  return (
    <div className='aboutcomp'>
        <h1 className='h1-heading'>{number}</h1>
        <h5 className='h5-heading'>{text}</h5>
    </div>
  )
}

export default AboutComp    