import React, { useState } from 'react';
import SelectCategory from './SelectCategory';
import SelectDifficultyLevel from './SelectDifficultyLevel';
import { WelcomeWrapper, HeaderWrapper, Spacer } from './styles/welcomeStyles';

type Props = {
  setSubmitted: Function;
  setDifficulty: Function;
  setCategory: Function;
  category: number | null;
  difficulty: string | null;
};

const Welcome: React.FC<Props> = ({
  setSubmitted,
  setDifficulty,
  setCategory,
  category,
  difficulty,
}) => {
  const [userMessage, setUserMessage] = useState<null | string>(null);
  const handleSubmit = () => {
    if (category && difficulty) {
      setUserMessage(null);
      setSubmitted(true);
    } else {
      setUserMessage('Please select a category and difficulty level');
    }
  };

  return (
    <WelcomeWrapper>
      <HeaderWrapper>Welcome to the Trivia Game!</HeaderWrapper>
      <SelectCategory setCategory={setCategory} />
      <Spacer />
      <SelectDifficultyLevel setDifficulty={setDifficulty} />
      <Spacer />
      <button onClick={handleSubmit}>Submit Choices</button>
      {userMessage && <p>{userMessage}</p>}
    </WelcomeWrapper>
  );
};

export default Welcome;
