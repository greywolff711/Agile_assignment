import React from 'react'
import './Cards.css';

function Cards(props) {

  return (
    <div className='Card__Container' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className='Card__con'> 
        <div className='Card__Heading'><strong>{props.Heading}</strong></div>
        <div className='Card__Content'>
            <div className='Img__Container'>{(props.img===null||props.img==="")? props.Description:<img src={props.img} alt="task img"/>}</div>
            <div className='Img__Container'>{(props.video===null||props.video==="")? "":<iframe src={props.video}/>}</div>
        
        </div>
      </div>
    </div>
  )
}

export default Cards