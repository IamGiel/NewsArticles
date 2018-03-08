
import axios from "axios";

export default {
  search: function (query, begin, end) {
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    var qs = '?api-key=866c1c46103642858f9ee86ed883446f&q=' + query;

    if (begin) {
      qs += '&begin_date=' + begin + '0101';
    }

    if (end) {
      qs += '&end_date=' + end + '1231';
    }


    return axios.get(queryURL + qs).then(function (response) {
      // If we get a result, return objects with the desired parts of the responses.
      // console.log(response);
      if (response.data.response.docs.length > 0) {
        var responses = [];

        for (var i = 0; i < 10; i++) {
          var doc = response.data.response.docs[i];
          var articleID = doc._id;
          var article = {
            title: doc.headline.main,
            url: doc.web_url,
            date: doc.pub_date,
            articleID: articleID
          };

          responses.push(article);
        }
        console.log(responses);
        return responses;

      } else {
        // If we don't get any results, return an empty string
        return false;
      }
    });
  }
}


// Gets all articles
// export default {
//   getSavedArticles: function() {
//     return axios.get("/api/articles");
//   },
//   // Deletes the article with the database id
//   deleteSavedArticle: function(mongooseId) {
//     return axios.delete("/api/articles/" + mongooseId);
//   },
//   // Saves a article to the database
//   saveArticle: function(article) {
//     return axios.post("/api/articles", article);
//   },
//   //Gets NYT Articles
//   getNYTArticles: function(query) {
//     console.log(query);
//     return axios.get(
//       `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
//       {
//         params: {
//           api_key: "866c1c46103642858f9ee86ed883446f",
//           q: query.searchTerm,
//           begin_date: query.startYear,
//           end_date: query.endYear
//         }
//       }
//     );
//   }
// };