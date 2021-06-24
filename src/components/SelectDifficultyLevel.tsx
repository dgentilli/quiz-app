import React from 'react';
import { SelectStyle } from './styles/globalStyles';

const difficultyLevels: string[] = ['easy', 'medium', 'hard'];

type Props = {
  setDifficulty: Function;
};

const SelectDifficultyLevel: React.FC<Props> = ({ setDifficulty }) => {
  return (
    <div>
      <SelectStyle
        onChange={(e) => setDifficulty(e.target.value)}
        style={{ width: 200, marginBottom: 10 }}
      >
        <option hidden>Select Difficulty Level</option>
        {difficultyLevels.map((item) => (
          <option key={item} value={item} style={{ width: 200 }}>
            {item}
          </option>
        ))}
      </SelectStyle>
    </div>
  );
};

export default SelectDifficultyLevel;
