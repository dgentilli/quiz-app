import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuestions, Difficulty, QuestionState } from './api';
// here is the link for the trivia api
// https://opentdb.com/api.php?amount=20&category=18&type=multiple

/**
 * On 12 June. Functionality is complete. Do styling on your own.
 * Also think about implementing a screen where users can select a category and difficulty level.
 * Should I let users select a number of questions too?
 * Just in case you need to refer back to the video:
 * Left of at 54min 55 sec in the video https://www.youtube.com/watch?v=F2JCjVSZlG0
 */

const TOTAL_QUESTIONS = 20;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startGame = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    //TO DO: Add try / catch block for error handling. Probably do this in the api file.
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const next = number + 1;

    if (next === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(next);
    }
  };

  return (
    <div className='App'>
      <h1>Trivia Game</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className='start' onClick={startGame}>
          Start
        </button>
      ) : null}

      {!gameOver ? <p className='score'>Score: {score}</p> : null}
      {loading ? <p className='score'>Loading Questions ....</p> : null}
      {!loading && !gameOver ? (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      ) : null}
      {!loading &&
      !gameOver &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button onClick={nextQuestion}>Next Question</button>
      ) : null}
    </div>
  );
};

export default App;
