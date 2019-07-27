import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Display from './components/Display';
import './App.css';

function App() {

  const API_KEY = '';

  const [book, setBook] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('becoming');

  useEffect(() => {
    goBooks();
  }, [query]);

  const goBooks = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`);
    const data = await response.json();
    setBook(data.items[0].volumeInfo);
    console.log(data.items[0].volumeInfo);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }

  return (
    <div>
      <Navbar />
      <div className="text-center">
            <div className="jumbotron">
                <h1 className="display-4">Search for your favorite books!</h1>
                <form className="search-form" onSubmit={getSearch} >
                    <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                    <button className="search-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
      <Display title={book.title} author={book.authors} description={book.description} />
    </div>
  );
}

export default App;
