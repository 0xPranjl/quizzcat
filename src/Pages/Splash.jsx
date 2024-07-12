import React, { useEffect } from 'react';
import './Splash.css';
import logo from './setu.png'; // Make sure to replace with the actual path to your image
import { useNavigate } from 'react-router-dom';

const Splash = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/Dash")
           },4000);
    },[])
  return (
    <div className="splash-container">
      <img src={logo} alt="Quizzcat Logo" className="logo" />
      
    </div>
  );
};

export default Splash;
