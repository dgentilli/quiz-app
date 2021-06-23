import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import { fetchQuestions, QuestionState } from '../api';
import { DefaultWrapper } from './styles/globalStyles';

const TOTAL_QUESTIONS = 15; //change this to a low number for testing

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

type Props = {
  category: number | null;
  difficulty: string | null;
  setSubmitted: Function;
};

const GameDisplay: React.FC<Props> = ({
  category,
  difficulty,
  setSubmitted,
}) => {
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startGame = async () => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuestions(
        TOTAL_QUESTIONS,
        difficulty,
        category
      );
      //TO DO: Add try / catch block for error handling. Probably do this in the api file.
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    };

    startGame();
  }, [category, difficulty]);

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
    <DefaultWrapper>
      <h1>Trivia Game</h1>
      {gameOver ||
        (userAnswers.length === TOTAL_QUESTIONS && (
          <div>
            <p>
              Final Score: {score} / {TOTAL_QUESTIONS}
            </p>
            <button onClick={() => setSubmitted(false)}>Start Over</button>
          </div>
        ))}

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
    </DefaultWrapper>
  );
};

export default GameDisplay;
