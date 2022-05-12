import React from 'react'
import './Search.css';

const Search = () => {
    return (<div className="Search">
    <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search Name Pronunciation"
            name="s"
        />
        <button type="submit">Search</button>
    </form></div>);
}

export default Search;