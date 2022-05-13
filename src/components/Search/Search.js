import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrievePronunciations,
  deleteAllPronunciations,
} from "../../actions/pronunciations";
import searchbutton from '../../resources/search.png'
import './Search.css';

const Search = () => {
  const [searchPronunciation, setSearchPronunciation] = useState("");
  const dispatch = useDispatch();
  const onChangeSearchPronunciation = e => {
    const searchPronunciation = e.target.value;
    setSearchPronunciation(searchPronunciation);
  };
  const retrievePronunciation = () => {
    dispatch(retrievePronunciations(searchPronunciation));
  };
  return (<div className="search">
    <div className="search-bar">
      <input
        type="text"
        id="header-search"
        placeholder="Search Name Pronunciation"
        name="s"
        className="search-field"
        value={searchPronunciation}
        onChange={onChangeSearchPronunciation}
      />
      <button type="button" className="search-button" onClick={retrievePronunciation}><img src={searchbutton} /></button>
    </div>
  </div>
  );
}
export default Search;