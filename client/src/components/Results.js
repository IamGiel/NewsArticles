import React from "react";
import styles from "../styles/style.css";
import Moment from 'react-moment';
const Results = props => {
  return(
  <div className="container fluid">
      {/* line space */}
      <div>Search Results: </div>

      <ul className="list-group" key={props.id}>
        {props.results.map(result => {
          return <li className="list-group-item" key={result.id}>
              <a href={result.url} key={result.id}>
                {result.title}
                <br />
                <Moment format="YYYY/MM/DD" key={result.id}>
                  {result.date}
                </Moment>
              </a>
              <button type="button" className={`pull-right ${styles.style}`} onClick={props.handleSaveSubmit} key={result.id}>
                Save{" "}
              </button>
            </li>;
        })}
      </ul>
    </div>)

};

export default Results;

