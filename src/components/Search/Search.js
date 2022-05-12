import React from 'react'
import searchbutton from '../../resources/search.png'
import './Search.css';

const Search = () => {
  return (<div className="search">
    <div className="search-bar">
      <input
        type="text"
        id="header-search"
        placeholder="Search Name Pronunciation"
        name="s"
        className="search-field"
      />
      <button type="submit" className="search-button"><img src={searchbutton} /></button>
    </div>
  </div>
  );
}
export default Search;