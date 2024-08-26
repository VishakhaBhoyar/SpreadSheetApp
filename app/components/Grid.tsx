'use client';

import React from 'react';
import Cell from './Cell';

const Grid: React.FC = () => {
  const rows = 20; 
  const cols = 50; 

  return (
    <div className="grid-container grid-cols-50 gap-0 ml-2 border-gray-800">
      {Array.from({ length: rows * cols }).map((_, index) => (
        <Cell key={index} index={index} />
      ))}
    </div>
  );
};

export default Grid;
