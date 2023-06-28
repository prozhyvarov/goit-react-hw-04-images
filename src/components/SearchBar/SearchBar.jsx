import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
} from './SearchBar.styled';


const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchName(inputValue.trim());
    onSubmit(searchName);
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
// class SearchBar extends Component {
//   state = {
//     searchName: '', 
//     inputValue: '',
//   };

//   handleChange = event => {
//     this.setState({ inputValue: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault(); 
//     const searchQuery = event.target.elements.searchName.value.trim(); 
//     if (searchQuery === '') {
//       Notiflix.Notify.warning(
//         'The search bar cannot be empty. Please type any criteria in the search bar.'
//       );
//      }
//     this.props.onSubmit(searchQuery);
//     event.target.reset(); 
//   };

//   render() {
//     return (
//       <header>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchButton>
//             <BsSearch />
//           </SearchButton>
//           <SearchInput
//             name="searchName"
//             type="text"
//             id="search"
//             value={this.state.inputValue}
//             onChange={this.handleChange}
//           />
//         </SearchForm>
//       </header>
//     );
//   }
// }

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default SearchBar;