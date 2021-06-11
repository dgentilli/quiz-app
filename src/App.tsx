import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuestions, Difficulty } from './api';
// here is the link for the trivia api
// https://opentdb.com/api.php?amount=20&category=18&type=multiple

/**
 * Left of at 38min 30 sec in the video
 */

const TOTAL_QUESTIONS = 20;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(
    'fetchQuestions',
    fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
  );

  const startGame = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className='App'>
      <h1>Trivia Game</h1>
      <button className='start' onClick={startGame}>
        Start
      </button>
      <p className='score'>Score</p>
      <p className='score'>Loading Questions ....</p>
      {/* <QuestionCard 
      questionNr={number + 1}
      totalQuestions={ TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default App;
