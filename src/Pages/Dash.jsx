import React, { useState } from 'react';
import './Dash.css';
import catLogo from '../c1.png'; // Replace with your actual image file path

function Dash() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [coins, setCoins] = useState(0);
    const [answered, setAnswered] = useState(false);

    return (
        <div className="app">
            <header className="header">
                <img src={catLogo} alt="Cat Logo" className="logo" />
            </header>
            <main className="main-content">
                
                <section className="section-2">
                    <h2>Coins 🪙</h2>
                    <p style={{fontSize:32}}>180000002</p>
                </section>
              
                <section className="section-4">
                    <h2>Coins</h2>
                    <p>{coins} NotCoins</p>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 NotCoin. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Dash;
