import React from "react";
//day picker
// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";
// import { formatDate, parseDate } from "react-day-picker/moment";
// import Moment from "react-moment";
import InputMask from "react-input-mask";




const Search = props => {
return (
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
        <InputMask
          onChange={props.handleInputChange}
          value={props.begin}
          name="begin"
          type="text"
          className="form-control"
          placeholder="Ender 4 digit Start search Year - good-luck typing more numbers ;p"
          id="search"
          mask="9999"
          maskChar=" "
        />
        <InputMask
          onChange={props.handleInputChange}
          value={props.end}
          name="end"
          type="text"
          className="form-control"
          placeholder="Ender 4 digit End search Year - good-luck typing letters for this matter ;p"
          id="search"
          mask="9999"
          maskChar=" "
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  </div>
);
}

export default Search;
