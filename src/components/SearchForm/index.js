import React from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchForm(props) {
  return (
    <form className="justify-content-center">
      <div className="form-group">

      <FontAwesomeIcon icon={faSearch} id="search-icon"/>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search all projects"
          id="search"
        > 
        </input>
   
      </div>
    </form>
  );
}

export default SearchForm;
