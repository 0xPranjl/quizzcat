import React, { useEffect } from 'react';
import './Splash.css';
import logo from './c1.png'; // Make sure to replace with the actual path to your image
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
      <h1 className="name">Quizzcat</h1>
      <p className="tagline">Rewarding knowledge and Prediction</p>
    </div>
  );
};

export default Splash;
