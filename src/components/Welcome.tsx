import React from 'react';
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
  return (
    <div>
      <h1>This is Welcome!</h1>
      <SelectCategory setCategory={setCategory} category={category} />
      <SelectDifficultyLevel
        setDifficulty={setDifficulty}
        difficulty={difficulty}
      />

      <button onClick={() => setSubmitted(true)}>Submit Choices</button>
    </div>
  );
};

export default Welcome;
