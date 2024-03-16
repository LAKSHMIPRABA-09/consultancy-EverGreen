/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/logo.jpg'
import user from '../Assets/user.gif'
import search from '../Assets/search.gif'
import cart from '../Assets/shopping-cart.gif'
import { Link } from 'react-router-dom'
export const Navbar = () => {

  const [menu,setMenu] = useState('home');
  return (


    <div className='navbar'>
    <div className='nav-logo'>
      <img src={Logo} alt="" />
      <p>EVERGREEN</p>
    </div>
    <ul className='nav-menu'>
      <li onClick={()=>{setMenu('home')}}><Link style={{ textDecoration:'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu('shop')}}><Link style={{ textDecoration:'none'}} to='/shop'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu('track')}}><Link style={{ textDecoration:'none'}} to='/'>Track orders</Link>{menu==='track'?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu('blog')}}><Link style={{ textDecoration:'none'}} to='/'>Blog</Link>{menu==='blog'?<hr/>:<></>}</li>

    </ul>
    <div className='nav-login-cart'>
      <Link style={{ textDecoration:'none'}} to='/login'><button><img src={user} alt="" /></button></Link>
      <Link style={{ textDecoration:'none'}} ><button><img src={search} alt="" /></button></Link>
      <Link style={{ textDecoration:'none'}} to='cart'><button><img src={cart} alt="" /></button></Link>
      <div className='nav-cart-count'>0</div>
    </div>
    </div>
  )
}
export default Navbar