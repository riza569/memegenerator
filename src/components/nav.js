import React from 'react'
import '../style.css'
import navlogo from '../images/Troll Face.png'
const Nav=()=>{
    return(
        <div className='nav'>
            <img src ={navlogo} alt="fuck you" className='nav--logo'/>
            <h1 className='nav--heading'>Meme Generator</h1>
            <span className='nav--side'>React Course - Project 3</span>
        </div>
    )
}
export default Nav