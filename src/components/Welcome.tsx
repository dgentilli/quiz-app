import React from 'react';
import SelectCategory from './SelectCategory';
type Props = {
  setSubmitted: Function;
  setDifficulty: Function;
  setCategory: Function;
  category: any;
};

const Welcome: React.FC<Props> = ({
  setSubmitted,
  setDifficulty,
  setCategory,
  category,
}) => {
  return (
    <div>
      <h1>This is Welcome!</h1>
      <SelectCategory setCategory={setCategory} category={category} />
      <button onClick={() => setSubmitted(true)}>Submit Choices</button>
    </div>
  );
};

export default Welcome;
