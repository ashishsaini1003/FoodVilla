import React, { useState } from 'react';

const SearchBar =({restaurantFilter})=> {

  const [text,setText]=useState("");
  return (
    <div className="search">
      <input type="text" className="searchInput" placeholder="search" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button type="submit" onClick={()=>{restaurantFilter(text)}}>Search</button>
    </div>
  );
}

export default SearchBar;
