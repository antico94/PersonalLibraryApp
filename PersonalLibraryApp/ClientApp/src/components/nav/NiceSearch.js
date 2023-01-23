import {useEffect, useRef, useState} from 'react';
import './search.css'

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    try {
      // make requests to 3 APIs
      const genreResponse = await fetch(`https://localhost:7082/api/Genre?search=${searchValue}`);
      const authorResponse = await fetch(`https://localhost:7082/api/Author?search=${searchValue}`);
      const bookResponse = await fetch(`https://localhost:7082/api/Book?search=${searchValue}`);
      // parse responses as json
      const genreData = await genreResponse.json();
      const authorData = await authorResponse.json();
      const bookData = await bookResponse.json();
      // merge data from all 3 responses
      const allData = [...genreData, ...authorData, ...bookData];
      console.log(allData)
      setSearchResults(allData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
      />
      <button type="submit">Search</button>
      <div>
        {searchResults.map((result, index) => (
          <div key={index}>{result.name}</div>
        ))}
      </div>
    </form>
  );
}

export default SearchInput;