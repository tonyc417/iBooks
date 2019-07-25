import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Display from './components/Display';
import './App.css';

function App() {

  const API_KEY = '';

  const [query, setQuery] = useState('quiliting');

  useEffect(() => {
    goBooks();
  }, [query]);

  const goBooks = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=diary_of_a_wimpy_kid&key=${API_KEY}`);
    const data = await response.json();
    // setQuery(data.items);
    console.log(data.items[0].volumeInfo);
  }

  return (
    <div>
      <Navbar />
      <div className="text-center">
            <div className="jumbotron">
                <h1 className="display-4">Search for your favorite books!</h1>
                <form className="search-form">
                    <input className="search-bar" type="text" />
                    <button className="search-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
      <Display />
    </div>
  );
}

export default App;
