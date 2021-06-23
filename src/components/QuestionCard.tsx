import React from 'react';
import {
  AnswerWrapper,
  QuestionCardParagraph,
  AnswerChoice,
} from './styles/questionStyles';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div className='number'>
    <QuestionCardParagraph>
      Question: {questionNr} / {totalQuestions}
    </QuestionCardParagraph>
    <QuestionCardParagraph dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <AnswerWrapper key={answer}>
          <AnswerChoice disabled={userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </AnswerChoice>
        </AnswerWrapper>
      ))}
    </div>
  </div>
);

export default QuestionCard;
