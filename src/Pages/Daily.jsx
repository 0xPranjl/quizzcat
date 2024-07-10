import React, { useState } from 'react';
import './Daily.css';

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

function Daily() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [coins, setCoins] = useState(0);
    const [answered, setAnswered] = useState(false);

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

    return (
        <div className="app">
            <div className="quiz-container">
                <h2 className="question">{quizData[currentQuestion].question}</h2>
                <ul className="options">
                    {quizData[currentQuestion].options.map((option, index) => (
                        <li
                            key={index}
                            className={`option ${answered && option === quizData[currentQuestion].answer ? 'correct' : ''}`}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
                {feedback && <div className={`feedback ${feedback === 'Correct!' ? 'correct' : 'incorrect'}`}>{feedback}</div>}
            </div>
            <br>
            </br>
            <br></br>
            <div className="coin-container">
                <p>Coins: {coins}</p>
            </div>
        </div>
    );
}

export default Daily;
