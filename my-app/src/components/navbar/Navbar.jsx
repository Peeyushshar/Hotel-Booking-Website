import React from 'react'
import './navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">TravellerBooking</span>
            <div className="navItems">
               {/* <button className='navButton'>Register</button> */}
                <form action='/signUp'> 
               <button className='navButton'>Login</button>
               </form> 
            </div>
        </div>
    </div>
  )
}

export default Navbar