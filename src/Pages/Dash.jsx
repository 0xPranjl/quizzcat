import React, { useEffect, useState } from 'react';
import './Dash.css';
import catLogo from '../c1.png'; // Replace with your actual image file path
import Lottie from "lottie-react";
import groovyWalkAnimation from "./done.json";
import { FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa';
import {TonConnectUI} from '@tonconnect/ui';
import TwitterLogin from "react-twitter-login";

function Dash() {

    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [coins, setCoins] = useState(0);
    const [level, setlevel] = useState("");
    const [btn,sbtn]=useState(false);
    const [answered, setAnswered] = useState(false);
    useEffect(()=>{
        
       
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
    const authHandler = (err, data) => {
      console.log(err, data);
    };

    return (
        <div className="app">
              
            <header className="header">
                <img src={catLogo} alt="Cat Logo" className="logo" />
            </header>
            <main className="main-content">
            <section className="section-4">
                    <h2>Link wallet 🚀(+1000🪙) </h2>
                    {!btn?<div className='social'><button onClick={()=>{
                       sbtn(true);
                       const tonConnectUI = new TonConnectUI({
                        manifestUrl: 'https://quizzcat.netlify.app/tonconnect-manifest.json',
                        buttonRootId: 'ton-wallet'
                    });
                    }}>Link wallet</button></div>:<></>}
                    <div id="ton-wallet"></div>
                </section>
                <section className="section-2">
                 
                    <h2>Coins 🪙</h2>
                    <p style={{fontSize:26}}>{coins}</p>
                </section>
                <section className="section-4">
                    <h2>Knowledge Rate 🚀 </h2>
                    <p style={{fontSize:26}}>1K🪙/question</p>
                    <p style={{fontSize:26}}>10K🪙/prediction</p>
                </section>
                <section className="section-4">
                  
                </section>
                <section className="section-5">
          <h2>Easy Tasks</h2>
          <div className="social">
            <FaTwitter size={30} />
            <TwitterLogin
      authCallback={authHandler}
      consumerKey={"PyHxgJuyORZqhDiuKAne8LcxT"}
      consumerSecret={"RBqOgWJfflgk2GLGmKtHFnHituqvf3vROPfAqzOPpfKficIrI9"}
    />
            {/* <button onClick={() => window.open('https://twitter.com', '_blank')}>Join Twitter(+1000🪙)</button> */}
          </div>
          <div className="social">
            <FaYoutube size={30} />
            <button onClick={() => window.open('https://youtube.com', '_blank')}>Join YouTube(+1000🪙)</button>
          </div>
          <div className="social">
            <FaTelegram size={30} />
            <button onClick={() => window.open('https://t.me/', '_blank')}>Join Telegram(+1000🪙)</button>
          </div>
        </section>
                <section className="section-4">
                    <h2>Level Xp 🚀 </h2>
                    <p style={{fontSize:26}}>{level}</p>
                </section>
            </main>
            
        </div>
    );
}

export default Dash;
