import React from 'react'
import './Hero.css'
import home_image from '../Assets/home_image.jpg'
import hero_img from '../Assets/hero_img.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>Peace worn by the free-spirited</h2>
        <div className='hero-hand-icon'></div>
          <p>looks across the board</p>
          <img src={home_image} alt="" />
      </div>
      <p>collections</p>
      <p>for everyone</p>
      <div className='hero-latest-btn'>
      <div>Latest</div>
          {/* <img src={arrow} alt="" /> */}
      </div>
      <div className='hero-right'>
           <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero