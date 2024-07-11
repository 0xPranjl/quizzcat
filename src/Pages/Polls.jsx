import React, { useState } from 'react';
import './Polls.css';

const dummyPolls = [
  { id: 1, question: 'Will it rain tomorrow?', correctAnswer: 'Yes', reward: 10 },
  { id: 2, question: 'Will the stock market go up today?', correctAnswer: 'No', reward: 20 },
  { id: 3, question: 'Will Team A win the match?', correctAnswer: 'Yes', reward: 15 },
  { id: 4, question: 'Will it rain tomorrow?', correctAnswer: 'Yes', reward: 10 },
  { id: 5, question: 'Will the stock market go up today?', correctAnswer: 'No', reward: 20 },
  { id: 6, question: 'Will Team A win the match?', correctAnswer: 'Yes', reward: 15 },
  { id: 1, question: 'Will it rain tomorrow?', correctAnswer: 'Yes', reward: 10 },
  { id: 2, question: 'Will the stock market go up today?', correctAnswer: 'No', reward: 20 },
  { id: 3, question: 'Will Team A win the match?', correctAnswer: 'Yes', reward: 15 },
  { id: 4, question: 'Will it rain tomorrow?', correctAnswer: 'Yes', reward: 10 },
  { id: 5, question: 'Will the stock market go up today?', correctAnswer: 'No', reward: 20 },
  { id: 6, question: 'Will Team A win the match?', correctAnswer: 'Yes', reward: 15 },
];

const Poll = ({ poll, handleVote }) => {
  const [prediction, setPrediction] = useState(null);
  const [earnedCoins, setEarnedCoins] = useState(0);

  const vote = (answer) => {
    setPrediction(answer);
    if (answer === poll.correctAnswer) {
      setEarnedCoins(poll.reward);
    } else {
      setEarnedCoins(0);
    }
    handleVote(poll.id, answer);
  };

  return (
    <div className="poll">
        <div className='headings'>
        <h3 style={{color:"green"}}>+🪙5K</h3>
        <h3 style={{color:"red"}}>+🪙1K</h3>
        </div>
      <h2>{poll.question}</h2>
      <button onClick={() => vote('Yes')} disabled={prediction !== null}>Yes</button>
      <button onClick={() => vote('No')} disabled={prediction !== null}>No</button>
      {prediction && (
        <div className="result">
          <p>You predicted: {prediction}</p>
          <p>Coins earned: {earnedCoins}</p>
        </div>
      )}
    </div>
  );
};

const PollsPage = () => {
  const [votes, setVotes] = useState({});

  const handleVote = (id, answer) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [id]: answer,
    }));
  };

  return (
    <div className="PollsPage">
      <h1>Polls</h1>
      {dummyPolls.map((poll) => (
        <Poll key={poll.id} poll={poll} handleVote={handleVote} />
      ))}
    </div>
  );
};

export default PollsPage;
