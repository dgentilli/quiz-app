import React, { useState } from 'react';
import GameDisplay from './GameDisplay';
import Welcome from './Welcome';

const AppWrapper = () => {
  const [category, setCategory] = useState<any>(null);
  const [difficulty, setDifficulty] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  console.log({ category });
  console.log({ difficulty });

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
          category={category}
          difficulty={difficulty}
        />
      )}
    </div>
  );
};

export default AppWrapper;
