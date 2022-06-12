import React from 'react'
import './Cards.css';

function Cards(props) {

  return (
    <div className='Card__Container'>
      <div className='Card__con'> 
        <div className='Card__Heading'><strong>{props.Heading}</strong></div>
        <div className='Card__Content'>
            <div className='Img__Container'>{(props.img===null||props.img==="")? props.Description:<img src={props.img} alt="task img"/>}</div>
        </div>
      </div>
    </div>
  )
}

export default Cards