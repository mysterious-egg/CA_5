import React, { useState } from 'react';
import './SearchBar.css';

function SearchBox({ onSearch }) {
  const [searchItem, setsearchItem] = useState('');

  const handleChange = (event) => {
    const newsearchItem = event.target.value;
    setsearchItem(newsearchItem);
    onSearch(newsearchItem); 
  };

  return (
      <input
        type='text'
        className='SearchBar'
        placeholder='Find your books'
        value={searchItem}
        onChange={handleChange}
      />
  );
}

export default SearchBox;
