// import React from "react";

// const ArticleDetail = props => (
//   <div className="text-center">
//     <h3>
//       Title: {props.children}
//     </h3>
//     <h3>
//       Year: {props.children}
//     </h3>
//     <h3>
//       link: {props.children}
//     </h3>
//   </div>
// );

// export default ArticleDetail;

import React from "react";

const ArticleDetail = props => (
  <div className="text-center">
    <h3>
      Article Title: {props.Title}
    </h3>
    <h3>
      Year: {props.Year}
    </h3>
    <h3>
      Link: {props.Link}
    </h3>
  </div>
);

export default ArticleDetail;

