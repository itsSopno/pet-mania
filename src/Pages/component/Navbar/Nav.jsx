import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthContext';
import { Link } from 'react-router';
import './nav.css'
  import profile from './istockphoto-2171382633-612x612.jpg'



const Nav = () => {


    const {user} = useContext(AuthContext)
    return (
     
   <div className="navbar nav-main bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-[#F7F7FF] rounded-box z-1 mt-3 w-52 p-2 ul-for ">
           <li><Link to="About">Service</Link></li>
    <li><Link to="/home">Home</Link></li>
    <li><Link to='Profile'>Profile</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">PET</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ul-for">
      <li><Link to="About">Service</Link></li>
    <li><Link to="/home">Home</Link></li>
      <li><Link to="Profile">Profile</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
  <div className="avatar">
  <div className="w-16 rounded">
   {user?.photoURL ? (
      <img src={user?.photoURL} className='service-image' alt="User Profile" />
    ) : (
      <img src={profile} className='service-image'></img>
    )}
  </div>
</div>
      <div
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-[#F7F7FF] rounded-box z-1 mt-3 w-52 p-2 shadow">
      {user &&  <h2>
          <h1 className="justify-between">
            {user.displayName}
          </h1>
        </h2> } 
        <li><a>Settings</a></li>
        <Link to="/">LOGOUT</Link>
      </div>
    </div>
  </div>
</div>
   
    );
};

export default Nav;