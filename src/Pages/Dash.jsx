import React, { useEffect, useState } from 'react';
import './Dash.css';
import Typewriter from 'typewriter-effect';
import Counter from "./Counter";
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
    <header className="App-header">
        <Counter start={0} end={50000} duration={3000} />
        <h1>Store Count</h1>
      </header>
    </div>
    
   </div>
  );
};



export default Dash;
