import React, { useEffect, useState } from 'react';
import './Dash.css';
import Typewriter from 'typewriter-effect';
const Dash= () => {
  const [placeholder, setPlaceholder] = useState('');
  const phrases = ['buy anything ', '  buy everything '];
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    
  });

  return (
    <div className="App">
    <div className="input-container">
      
    {!isFocused && (
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ['Search anything', 'Get everything locally'],
              autoStart: true,
              loop: true,
              delay:45,
              deleteSpeed: 35,
            }}
          />
        </div>
      )}
         <div className="input-containe">
      <input type="text" className="search-input" placeholder="Search for products..." />
    </div>
    </div>
   </div>
  );
};



export default Dash;
