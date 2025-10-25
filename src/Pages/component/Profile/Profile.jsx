import React from 'react';
import './profile.css'
import { Link } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthContext';
import profilepic from './c0749b7cc401421662ae901ec8f9f660.jpg'
const Profile = () => {
    const {user ,  bookingData} = useContext(AuthContext)
    console.log(user)
    console.log(  bookingData)
    return (
        <section className='profile-head w-full h-screen'>
    <div className='profile-page'>
      <div className='profile'>
        <Link to="/home" className='back-link'>⬅ Back</Link>
        <h1 className='profile-title'>{user.displayName ? (
    <h1>Welcome, {user.displayName}!</h1>
  ) : (
    <h1>Welcome, Guest!</h1>
  )}</h1>
      </div>
<div className='profile-point'>
     <div className='profile-section'>
  {user?.photoURL ? (
    <img src={user?.photoURL} className='service-image' alt="User Profile" />
  ) : (
    <img src={profilepic} className='service-image'></img>
  )}
</div>

       <div className='profile-section'>
        <p className='email'>Email: {user.email}</p>
      </div>
      </div>
 <div className='cta'>
         <Link className='logout' to="/">LOGOUT</Link>
      </div>
    </div>
    </section>
    );
};

export default Profile;