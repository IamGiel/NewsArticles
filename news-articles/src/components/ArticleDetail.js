
import React from "react";

const ArticleDetail = props => (
  <div className="text-center">
    <h3>
      Article Title: {props.title}
    </h3>
    <h3>
      Year: {props.date}
    </h3>
    <h3>
      Link: {props.url}
    </h3>
  </div>
);

export default ArticleDetail;

