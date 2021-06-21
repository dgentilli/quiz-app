import React, { useState } from 'react';
import SelectCategory from './SelectCategory';
import SelectDifficultyLevel from './SelectDifficultyLevel';

type Props = {
  setSubmitted: Function;
  setDifficulty: Function;
  setCategory: Function;
  category: any;
  difficulty: any;
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
    <div>
      <h1>This is Welcome!</h1>
      <SelectCategory setCategory={setCategory} />
      <SelectDifficultyLevel setDifficulty={setDifficulty} />

      <button onClick={handleSubmit}>Submit Choices</button>
      {userMessage && <p>{userMessage}</p>}
    </div>
  );
};

export default Welcome;
