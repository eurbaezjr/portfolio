import React from "react";
import "./style.css"

function SearchForm(props) {
  return (
    <form className="justify-content-center">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search accross all projects"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
