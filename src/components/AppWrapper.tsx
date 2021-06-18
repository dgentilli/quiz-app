import React, { useState } from 'react';
import GameDisplay from './GameDisplay';
import Welcome from './Welcome';

const AppWrapper = () => {
  const [category, setCategory] = useState('science');
  const [difficulty, setDifficulty] = useState('easy');
  const [userMessage, setUserMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {category && difficulty && submitted ? (
        <GameDisplay
          category={category}
          difficulty={difficulty}
          setSubmitted={setSubmitted}
        />
      ) : (
        <Welcome
          setSubmitted={setSubmitted}
          setDifficulty={setDifficulty}
          setCategory={setCategory}
        />
      )}
    </div>
  );
};

export default AppWrapper;
