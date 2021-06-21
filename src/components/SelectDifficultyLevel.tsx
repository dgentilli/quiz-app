import React from 'react';

const difficultyLevels: string[] = ['easy', 'medium', 'hard'];

type Props = {
  setDifficulty: Function;
};

const SelectDifficultyLevel: React.FC<Props> = ({ setDifficulty }) => {
  return (
    <div>
      <select
        onChange={(e) => setDifficulty(e.target.value)}
        style={{ width: 200, marginBottom: 10 }}
      >
        <option hidden>Select Difficulty Level</option>
        {difficultyLevels.map((item) => (
          <option key={item} value={item} style={{ width: 200 }}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDifficultyLevel;
