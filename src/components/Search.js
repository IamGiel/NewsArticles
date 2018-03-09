import React from "react";
//day picker
// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";
// import { formatDate, parseDate } from "react-day-picker/moment";

const Search = props => (
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
          placeholder="Search a New York Times"
          id="search"
        />
        <input
          onChange={props.handleInputChange}
          value={props.begin}
          name="begin"
          type="text"
          className="form-control"
          placeholder="Search a New York Times"
          id="search"
        />
        <input
          onChange={props.handleInputChange}
          value={props.end}
          name="end"
          type="text"
          className="form-control"
          placeholder="Search a New York Times"
          id="search"
        />
        {/* <DayPickerInput
          name="begin"
          type="number"
          value={props.begin}
          onChange={props.handleInputChange}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder="01/01/1990"
          id="begin"
          className="form-control"
          required
        />
        <DayPickerInput
          name="end"
          type="number"
          value={props.end}
          onChange={props.handleInputChange}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder="end"
          id="begin"
          className="form-control"
          required
        /> */}
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  </div>
);

export default Search;
