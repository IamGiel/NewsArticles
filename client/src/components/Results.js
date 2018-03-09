import React from "react";
import styles from "../styles/style.css";
import Moment from 'react-moment';
const Results = props => {
  return (
    <div className="container fluid">
      {/* line space */}
      <div>Search Results: </div>

      <ul className="list-group">
        {props.results.map(result => {
          return (
           <li className="list-group-item" key={result.id}>
             <a href={result.url}>
             {result.title}
             <br />
             <Moment format="YYYY/MM/DD">
                {result.date}
            </Moment>
             </a>
             <button type="button" className={`pull-right ${styles.style}`} onClick={result.handleSaveArticle}>
               Save{" "}
             </button>
          </li>);
        })}
      </ul>
    </div>
  );
};

export default Results;


/* <button
  type="button"
  className="btn-info pull-right"
  onClick={result.handleSaveArticle}
>
  Save{" "}
</button>; */

// import React  from 'react';

 
// exports default class MyComponent extends React.Component {
//     render() {
//         return (
//             <Moment format="YYYY/MM/DD">
//                 1976-04-19T12:59-0500
//             </Moment>
//         );
//     }
// }