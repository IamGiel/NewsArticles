import React from "react";

const Results = props => {
  return <div className="container fluid">
      {/* line space */}
      <div>Search Results: </div>

      <ul className="list-group">
        {props.results.map(result => {
          return <a href={result.url} onClick={result.handleArticleOnClick}>
              <li className="list-group-item" key={result.id}>
                {result.title}
              </li>
            </a>;
        })}
      </ul>
    </div>;
};

export default Results;
