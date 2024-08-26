'use client';

import React, { useState } from 'react';
import useStore from '../../stores/useStore';

interface CellProps {
  index: number;
}

const Cell: React.FC<CellProps> = ({ index }) => {
  const { grid, setCell } = useStore();
  const [value, setValue] = useState(grid[index]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setCell(index, e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="border border-gray-700 p-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
    />
  );
};

export default Cell;
