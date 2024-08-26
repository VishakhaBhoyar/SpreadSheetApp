'use client';

import React, { useState } from 'react';
import useStore from '../../stores/useStore';

const Search: React.FC = () => {
  const { grid } = useStore();
  const [query, setQuery] = useState('');
  const filteredCells = grid.filter(cell => cell.includes(query));

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border p-2 rounded-md text-sm bg-blue-400 w-full"
      />
      <ul className='mt-4'>
        {filteredCells.map((cell, index) => (
          <li key={index} className="border-gray-300 max-w-xl">{cell}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
