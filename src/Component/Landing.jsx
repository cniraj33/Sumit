import React from 'react'
import './Landing.css'
import Instagram from '../img/namestey.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import Thumbup from '../img/thumbup.png'
import Boy from '../img/instagram.png'
import Crown from '../img/crown.png'
import glassimage from '../img/glassesimoji.png'
import FloatingDiv from '../Component/FloatingDiv'

const Landing = () => {
  return (
    <div className='intro '>
        <div className='i-left'>
            <div className='i-name'>
               <div>
                <span className='roller'> "IndiiFlavour"</span>
                <span className='roller1'> Indian Restaurent</span>
               </div>
                <span> WE ARE OPNING SOON {("!")} </span>
            </div>
            <div className='i-icons'>
                <img src={Boy} alt="" />
            </div>
        </div>
        <div className='i-left'>
        <img src={Instagram} alt="" />
      
        </div>
        <div className='blur1' style={{background: "#ddf7f8"}}></div>  
        <div className='blur1' style={{background: '#c1f5ff',
        top: '17rem',
        width: '21rem',
        height: '11rem',
        left:'-8rem'
        }}></div> 
    </div>
  )
}

export default Landing