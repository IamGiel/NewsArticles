import React, { Component } from "react";
// import Search from "./Search";
// import Results from "./Results";
// import Saved from "./Saved";

import "../styles/style.scss";
import Moment from "react-moment";
import styles from "../styles/style.scss";

//day picker
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";

import "moment/locale/it";
//api
import API from "../utils/API";
import Routes from "../utils/getRoutes";

class ComponentContainer extends Component {
  state = {
    search: "",
    results: [],
    saved: [],
    term: "",
    begin: "",
    end: "",
    searched: "",
    message: ""
  };



  componentDidUpdate() {
    // Check whether we have a new queryURL.
    if (
      this.state.searched !==
      this.state.term + this.state.begin + this.state.end
    ) {
      this.setState({
        searched: this.state.term + this.state.begin + this.state.end
      });
      // Run the query for the address
      API.runQuery(this.state.term, this.state.begin, this.state.end).then(
        function(data) {
          if (data) {
            if (JSON.stringify(data) !== JSON.stringify(this.state.results)) {
              this.setState({ results: data });
            }
          } else {
            this.setState({ message: "No results found!" });
          }
        }.bind(this)
      );
    }
  }
  // When a user submits...
  handleFormSubmit(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    if (this.state.searched !== this.state.term + this.state.begin + this.state.end) {
      this.setState({
        searched: this.state.term + this.state.begin + this.state.end
      });
      // Run the query for the address
      API.runQuery(this.state.term, this.state.begin, this.state.end).then(function(data) {
          if (data) {
            if (JSON.stringify(data) !== JSON.stringify(this.state.results)) {
              this.setState({ results: data });
            }
          } else {
            this.setState({ message: "No results found!" });
          }
        }.bind(this));
    }
    console.log(event);
  }

  // When this component mounts, search the API for Obama
  // componentDidMount() {
  //   this.NYTArticles("Obama");
  // }

  // NYTArticles = search => {
  //   API.getArticles(search)
  //     .then(res => {
  //       this.setState({ results: res });
  //       console.log(this.state.results, "test");
  //     })
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    console.log("got user input!")
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log("handleFormSubmit");
  //   this.NYTArticles(this.state.search);
  // };

  removeArticle = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const articleResults = this.state.results.filter(res => res.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ articleResults });
    console.log("this is removeArticle Function firing >>>>>");
  };

  searchNYTimes = event => {
    event.preventDefault();
    console.log("searchNYTimes");
    this.NYTArticles(this.state.url);
  };

  saveArticle = article => {
    //function that will
    console.log("saveArticle is saving article here <<<<<<<");
    Routes.saveArticle(article)
      .then(res => {
        // this.NYTArticles();
        this.NYTArticles(this.state.responses);
      })
      .catch(err => console.log(err));
  };

  // loadNYTArticles = articlesArray => {
  //   if (articlesArray.length > 5) {
  //     articlesArray.length = 5;
  //   }
  //   this.setState({
  //     NYTArticles: articlesArray,
  //     startYear: "",
  //     endYear: "",
  //     searchTerm: ""
  //   });
  // };

  handleSaveArticle = event => {
    event.preventDefault();
    console.log("handleSaveArticle is firing here");
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    //====================== this is a SEARCH FORM ==========================//
    return (
      <div className="container fluid separator">
        <div className="query">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">{"---<@@@ ...Search... @@@>---"}</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search a New York Times"
              id="search"
            />
            <label htmlFor="begin">Begin year:</label>
            <DayPickerInput
              type="number"
              value={this.state.begin}
              onChange={this.handleInputChange}
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder="01/01/1990"
              id="begin"
              className="form-control"
              required
            />
            <label htmlFor="end">End year:</label>
            <DayPickerInput
              type="number"
              value={this.state.end}
              onChange={this.handleInputChange}
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder="select end date"
              id="begin"
              className="form-control"
              required
            />
            <button 
            disabled={!(this.state.term) && (this.state.begin) && (this.state.end)}
                onClick={this.handleFormSubmit.bind(this)} className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
        {/* <form>
          <div className="form-group">
            <label htmlFor="search">{"---<@@@ ...Search... @@@>---"}</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search a New York Times"
              id="search"
            />
            <DayPickerInput
              value={this.state.startYear}
              onChange={this.handleInputChange}
              name="startYear"
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder="01/01/1990"
            />
            <DayPickerInput
              value={this.state.endYear}
              onChange={this.handleInputChange}
              name="endYear"
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={`${formatDate(new Date())}`}
            />
            <button onClick={this.handleFormSubmit} className="btn btn-primary">
              Search
            </button>
          </div>
        </form> */}

        {/* //====================== RESULTS Show Here ==========================// */}

        <div className="container fluid separator">
          {/* line space */}
          <div>Search Results: </div>

          <ul className="list-group">
            {this.state.results.map(result => {
              return (
                <li className="list-group-item" key={result.id}>
                  <a href={result.url}>
                    {result.title}
                    <br />
                    <Moment format="YYYY/MM/DD">{result.date}</Moment>
                  </a>
                  <button
                    type="button"
                    className={`pull-right ${styles.style}`}
                    onClick={() => this.saveArticle()}
                  >
                    Save{" "}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {/* //====================== SAVED ARTICLES LIVE HERE: ==========================// */}
        <div className="container fluid separator">
          {/* line space */}
          <div>Saved Searches: </div>

          <ul className="list-group">
            {this.state.saved.length > 0 ? (
              <div>
                {this.state.saved.map(article => {
                  return (
                    <row key={article.articleId}>
                      <col size="sm-10">
                        <a href={article.url}>
                          <strong>
                            {" "}
                            {article.title} by {article.author}
                          </strong>
                        </a>
                      </col>
                      <col size="sm-2">
                        <button onClick={this.handleSaveArticle(article._id)} />
                      </col>
                    </row>
                  );
                })}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </ul>
          <label htmlFor="search">An FH-V2 project</label>
        </div>
      </div>
    ); //div wrapper

    /* // ========================= Comment this section to try something else */
    // <div>
    //   <Search
    //     search={this.state.search}
    //     handleFormSubmit={this.handleFormSubmit}
    //     handleInputChange={this.handleInputChange}
    //   />
    //   <Results
    //     results={this.state.results}
    //     url={this.state.url}
    //     handleSaveArticle={this.handleSaveArticle}
    //   />

    //   <Saved
    //     saved={this.state.saved}
    //     url={this.state.url}
    //     searchNYTimes={this.searchNYTimes}
    //   />
    // </div>
  }
}

export default ComponentContainer;

// 1. componentDidMount calls API search query
// 2. Search Query - Queries the API - returns an array of objects
// 3. Pass the objects to the state
// 4. pass the state, update the state and
// 5. pass the state as a prop in the result component (line 48)
// 6. Inside the prop were mapping through the (prop.result) to the array of object
// 7. which is why it is being rendered to the browser
