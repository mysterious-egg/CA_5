import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './Redux/Book';
import Form from './components/Form';
import BooksList from './components/theme-page';
import Logo from './components/Logo';
import SearchBox from './components/SearchBar';
import Register from './components/RegisterButton';

function App() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const { data, isError } = state.book;

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <nav className='Nav'>
        <Link style={{ textDecoration: 'none' }} className='logo' to="/">
          <Logo />
        </Link>
        <SearchBox onSearch={handleSearch} />
        <Link style={{ textDecoration: 'none' }} to="/Register-Form">
          <Register />
        </Link>
      </nav>

      <Routes>
        <Route
          path='/'
          element={<BooksList data={data} isError={isError} searchTerm={searchTerm} />}
        />
        <Route path='/Register-Form' element={<Form />} /> 
      </Routes>
    </>
  );
}

export default App;
