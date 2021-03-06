import React from 'react';
import { SelectStyle } from './styles/globalStyles';

const allCategories: { id: number; name: string }[] = [
  {
    id: 10,
    name: 'Entertainment: Books',
  },
  {
    id: 11,
    name: 'Entertainment: Film',
  },
  {
    id: 12,
    name: 'Entertainment: Music',
  },
  {
    id: 17,
    name: 'Science & Nature',
  },
  {
    id: 18,
    name: 'Science: Computers',
  },
  {
    id: 19,
    name: 'Science: Mathematics',
  },
  {
    id: 21,
    name: 'Sports',
  },
  {
    id: 22,
    name: 'Geography',
  },
  {
    id: 23,
    name: 'History',
  },
  {
    id: 27,
    name: 'Animals',
  },
  {
    id: 28,
    name: 'Vehicles',
  },
];

type Props = {
  setCategory: Function;
};

const SelectCategory: React.FC<Props> = ({ setCategory }) => {
  return (
    <div>
      <SelectStyle
        onChange={(e) => setCategory(e.target.value)}
        style={{ width: 200, marginBottom: 10 }}
      >
        <option hidden>Choose a Category</option>
        {allCategories.map((item) => (
          <option key={item.id} value={item.id} style={{ width: 200 }}>
            {item.name}
          </option>
        ))}
      </SelectStyle>
    </div>
  );
};

export default SelectCategory;
