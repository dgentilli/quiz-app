import React from 'react';

type Props = {
  setSubmitted: Function;
  setDifficulty: Function;
  setCategory: Function;
};

const Welcome: React.FC<Props> = ({
  setSubmitted,
  setDifficulty,
  setCategory,
}) => {
  return (
    <div>
      <h1>This is Welcome!</h1>
      <button onClick={() => setSubmitted(true)}>Submit Choices</button>
    </div>
  );
};

export default Welcome;
