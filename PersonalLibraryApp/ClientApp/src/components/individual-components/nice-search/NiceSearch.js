import {useEffect, useRef, useState} from 'react';
import './search.css';

const SearchInput = () => {
  const searchInput = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
      <div className="niceSearch">
        <div className="niceSearch-inner">
          <label
              className={
                searchValue.length > 0 || isFocused
                    ? 'active'
                    : 'search'
              }
              htmlFor="input_search"
          >
            <input
                ref={searchInput}
                id="input_search"
                type="text"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
          </label>
        </div>
      </div>
  );
};

export default SearchInput;