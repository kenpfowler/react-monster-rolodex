import React from "react";
import './search-box.styles.css';

// functional components like this one dont have access to state or lifecycle methods
// we use them when all we want to do is render some HTML with some props
export const SearchBox = ({placeholder, handleChange}) =>
{
   return <input className="search" type='search' placeholder={placeholder} onChange={handleChange} />

}