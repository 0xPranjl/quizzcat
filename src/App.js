import React, { useState } from 'react';
import './App.css';
import Daily from './Pages/Daily';
import Dash from './Pages/Dash';

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
        answer: "Blue Whale",
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest",
    }
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [coins, setCoins] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [activeTab, setActiveTab] = useState('Dashboard');

    const handleOptionSelect = (option) => {
        if (answered) return; // Prevent multiple clicks

        const correctAnswer = quizData[currentQuestion].answer;
        const isCorrect = option === correctAnswer;

        if (isCorrect) {
            setFeedback('Correct!');
            setCoins(coins + 1000);
        } else {
            setFeedback('Wrong!');
            setCoins(coins + 100);
        }

        setAnswered(true);
        setTimeout(() => {
            if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setFeedback('');
                setAnswered(false); // Reset answered state for next question
            } else {
                alert('Quiz completed!');
                setCurrentQuestion(0);
                setFeedback('');
                setCoins(0);
                setAnswered(false); // Reset answered state
            }
        }, 1000);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard':
                return (
                    <div className="dashboard">
                       <Dash></Dash>
                        {/* Add your dashboard content here */}
                    </div>
                );
            case 'Daily Task':
                return (
                    <div className="daily-task">
                        
                        <Daily></Daily>
                        {/* Add your daily task content here */}
                    </div>
                );
            case 'Polls':
                return (
                    <div className="polls">
                        <h2>Polls Content</h2>
                        {/* Add your polls content here */}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="app">
            <div className="content">
                {renderContent()}
            </div>
            <div className="bottom-navigation">
                <button className={activeTab === 'Dashboard' ? 'active' : ''} onClick={() => setActiveTab('Dashboard')}>Dashboard</button>
                <button className={activeTab === 'Daily Task' ? 'active' : ''} onClick={() => setActiveTab('Daily Task')}>Daily Task</button>
                <button className={activeTab === 'Polls' ? 'active' : ''} onClick={() => setActiveTab('Polls')}>Polls</button>
            </div>
        </div>
    );
}

export default App;
