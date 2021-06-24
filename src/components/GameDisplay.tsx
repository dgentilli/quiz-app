import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import { fetchQuestions, QuestionState } from '../api';
import { DefaultWrapper, Button, HeaderWrapper } from './styles/globalStyles';
import { QuestionCardParagraph } from './styles/questionStyles';

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
  const [error, setError] = useState(false);

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
      if (newQuestions.length > 0) {
        setQuestions(newQuestions);
      } else {
        setError(true);
      }
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
      <HeaderWrapper>Trivia Game</HeaderWrapper>
      {gameOver ||
        (userAnswers.length === TOTAL_QUESTIONS && (
          <div>
            <p>
              Final Score: {score} / {TOTAL_QUESTIONS}
            </p>
            <Button onClick={() => setSubmitted(false)}>Start Over</Button>
          </div>
        ))}
      {userAnswers.length < TOTAL_QUESTIONS ? (
        <QuestionCardParagraph>Score: {score}</QuestionCardParagraph>
      ) : null}
      {loading ? (
        <QuestionCardParagraph>Loading Questions ....</QuestionCardParagraph>
      ) : null}

      {!loading && !gameOver && !error ? (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions && questions[number].question}
          answers={questions && questions[number].answers}
          userAnswer={
            userAnswers && userAnswers ? userAnswers[number] : undefined
          }
          callback={checkAnswer}
        />
      ) : error ? (
        <HeaderWrapper>
          Hmmm...Something went wrong. Please refresh and try another category.
        </HeaderWrapper>
      ) : null}
      {!loading &&
      !gameOver &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <Button onClick={nextQuestion}>Next Question</Button>
      ) : null}
    </DefaultWrapper>
  );
};

export default GameDisplay;
