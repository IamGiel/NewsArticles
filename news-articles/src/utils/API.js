import axios from "axios";


export default {
  search: function (query, startYear, endYear) {
    var BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
    var search = "?api-key=866c1c46103642858f9ee86ed883446f&q=" + query;
    if (startYear) {
        search += '&begin_date=' + startYear + '0101';
      }
    if (endYear) {
        search += '&end_date=' + endYear + '1231';
      }
    // Counter to keep track of article numbers as they come in
    var articleCounter = 0;
    return axios.get(BASEURL + search)
      .then(function (response){
        console.log(response);
        console.log(articleCounter);
      });

  }
}


