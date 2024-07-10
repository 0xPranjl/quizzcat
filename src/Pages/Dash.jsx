import React, { useEffect, useState } from 'react';
import './Dash.css';
import catLogo from '../c1.png'; // Replace with your actual image file path

function Dash() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [coins, setCoins] = useState(0);
    const [level, setlevel] = useState("");
    const [answered, setAnswered] = useState(false);
    useEffect(()=>{
        
       
        // coin balance calculator
        // localStorage.removeItem("coins");
        // localStorage.removeItem("level");
      if(localStorage.getItem("coins")==null){
        localStorage.setItem("coins","0")
        setCoins("0");
      }
      else{
        setCoins(localStorage.getItem("coins"));
      }
      // level checker
      if(localStorage.getItem("level")==null){
        localStorage.setItem("level","shishya");
        setlevel("shishya");
        console.log(coins);
      }
      else{
        var coin=parseInt(localStorage.getItem("coins"));
        console.log(coin);
        if(coin>10000000){
            localStorage.setItem("level","enlightened");
            setlevel("enlightened");
        }
       else if(coin>5000000&&coin<10000000){
        localStorage.setItem("level","genius");
        setlevel("genius");
       }
       else if(coin>1000000&&coin<5000000){
        localStorage.setItem("level","grandmaster");
        setlevel("Grandmaster");
       }
       else if(coin>1000000&&coin<500000){
        localStorage.setItem("level","master");
        setlevel("master");
       }
       else if(coin>50000&&coin<100000){
        localStorage.setItem("level","expert");
        setlevel("expert");
       }
       else if(coin>10000&&coin<50000){
        localStorage.setItem("level","guru");
        setlevel("guru");
       }
       else{
        localStorage.setItem("level","shishya");
        setlevel("shishya");
       }
       
      }


    },[]);

    return (
        <div className="app">
            <header className="header">
                <img src={catLogo} alt="Cat Logo" className="logo" />
            </header>
            <main className="main-content">
                
                <section className="section-2">
                    <h2>Coins 🪙</h2>
                    <p style={{fontSize:26}}>{coins}</p>
                </section>
                
                <section className="section-4">
                    <h2>Level Xp 🚀 </h2>
                    <p style={{fontSize:26}}>{level}</p>
                </section>
                {/* <section className="section-4">
                    <h2>Coins</h2>
                    <p>{coins} NotCoins</p>
                </section> */}
            </main>
            
        </div>
    );
}

export default Dash;
