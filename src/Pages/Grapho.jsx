// src/Grapho.js
import React, { useEffect, useState } from 'react';
import './Grapho.css';
import avatar from './c1.png'; // Ensure you have c1.png in the src folder
import { useNavigate } from 'react-router-dom';

const Grapho = () => {
  const [xPosition, setXPosition] = useState(100);
  const [yValue, setYValue] = useState(0);
  const [path, setPath] = useState([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const Navigate=useNavigate();


  useEffect(() => {
    const duration = 10000; // Duration of the animation in milliseconds
    const intervalDuration = 500; // Interval duration in milliseconds
    const totalSteps = duration / intervalDuration; // Total steps for the animation

    const generateRandomYValue = () => {
      const fluctuation = Math.random() * 4; // Random fluctuation between -2.5 and 2.5
      return fluctuation;
    };

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep >= totalSteps) {
        clearInterval(interval);
        setIsAnimating(false); // Animation complete, set isAnimating to false
        return;
      }

      setXPosition((prevX) => (prevX + 1000) % 400);
      const newYValue = generateRandomYValue();
      setYValue(newYValue);
      setPath((prevPath) => [...prevPath, { x: currentStep*20, y: newYValue * 50 }]);
      currentStep++;
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      const x=parseInt(localStorage.getItem("coins"))*yValue;
      localStorage.setItem("coins",x);
      setShowModal(true); 
      //Navigate("/Dash");
    }
  }, [isAnimating, yValue]);
  const closeModal = () => {
    setShowModal(false);
    Navigate("/Dash");
  };
  return (
    <div className="graph-container">
      <div className="y-axis">
        <div className="y-label">3X</div>
        <div className="y-label">2X</div>
        <div className="y-label">1X</div>
        <div className="y-label">0X</div>
        <div className="y-label">1X</div>
        <div className="y-label">2X</div>
        <div className="y-label">3X</div>
      </div>
      <div className="x-axis">
        {[...Array(11)].map((_, i) => (
          <div key={i} className="x-tick"></div>
        ))}
      </div>
      <div className="wave">
        <svg className="wave-path" viewBox="0 0 800 400">
          <polyline
            points={path.map(point => `${point.x},${200 - point.y}`).join(' ')}
            stroke="Red"
            fill='none'
            strokeWidth="2"
          />
        </svg>
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
          <div className="y-value">{yValue.toFixed(2)}X</div>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p style={{fontSize:18}} className='pop'>Congrats! Your 🪙coins got {yValue}X.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Grapho;
