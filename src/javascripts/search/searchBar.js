import React from 'react';

function SearchBar(props){
  return (
    <div className="search-bar">
      <div className="search-wrapper input-append">
        <input className="search-box" type="text" onChange={props.handleTextToSearch}/>
        <button id="search-submit" className="btn" type="button" onClick={props.handleSearchClick}>search</button>
      </div>
      <div className="suggestions"></div>
    </div>
  )
}

export default SearchBar;
