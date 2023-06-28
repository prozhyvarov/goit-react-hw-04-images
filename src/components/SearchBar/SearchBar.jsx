import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchBar.styled';


const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setInputValue(inputValue.trim());
    onSubmit(inputValue);
    event.target.reset();
  };

  return (
    <header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton>
          <BsSearch />
        </SearchButton>
        <SearchInput
          name="searchName"
          type="text"
          id="search"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
