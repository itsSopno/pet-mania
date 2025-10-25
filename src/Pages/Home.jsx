import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import Nav from './component/Navbar/Nav';
import { Outlet } from 'react-router';
import Footer from './footer/Footer';

const Home = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div className="relative min-h-screen">
      <Nav />
      
      
      
        <Outlet />
        <Footer></Footer>
    </div>
  );
};

export default Home;