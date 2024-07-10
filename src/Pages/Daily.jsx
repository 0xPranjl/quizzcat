import React, { useState,useEffect } from 'react';
import './Daily.css';
import Lottie from "lottie-react";
import done from "./done.json";
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
    const [ani,sani]=useState(false);


    useEffect(()=>{
        if(localStorage.getItem("coins")==null){
          setCoins("0");
        }
        else{
          setCoins(localStorage.getItem("coins"));
        }
        if(localStorage.getItem("ani")==null){
            
          }
          else{
            if(localStorage.getItem("ani")=="true"){
             sani(true);
            }
          }
      },[]);
  
    const handleOptionSelect = (option) => {
        if (answered) return; // Prevent multiple clicks

        const correctAnswer = quizData[currentQuestion].answer;
        const isCorrect = option === correctAnswer;

        if (isCorrect) {
            setFeedback('Correct!');
            var x=parseInt(localStorage.getItem("coins"))+1000;
            console.log(x);
            setCoins(x);
            localStorage.setItem("coins",x.toString());
        } else {
            setFeedback('Wrong!');
            var x=parseInt(localStorage.getItem("coins"))+100;
            setCoins(x);
            localStorage.setItem("coins",x.toString());
            
        }

        setAnswered(true);
        setTimeout(() => {
            if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setFeedback('');
                setAnswered(false); // Reset answered state for next question
            } else {
                alert('Quiz completed!');
                sani(true);
                localStorage.setItem("ani","true");
                setCurrentQuestion(0);
                setFeedback('');
                setCoins(0);
                setAnswered(false); // Reset answered state
            }
        }, 1000);
    };

    return (
        <div className="app">
            {!ani?<div><div className="quiz-container">
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
            </div>:
            <div>
            <Lottie animationData={done} loop={true} /><br></br>
            <h1 style={{color:"black", paddingLeft:40}}>   All done for Today!!</h1>
            </div>
            }
        </div>
    );
}

export default Daily;
