import React from "react";

const Search = props =>
<div className="container fluid">
  <form>
    <div className="form-group">
      <label htmlFor="search">FH-V2</label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search New York Times"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>

  </form>
  </div>;

export default Search;
