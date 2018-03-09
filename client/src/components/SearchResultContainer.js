import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import Save from "./Save";

import API from "../utils/API";


class SearchResultContainer extends Component {
  state = {
    search: [],
    results: [],
    begin: "",
    end: "",
    saved: "",
    title: "",
    date: ""
  };

  //When this component mounts, search the Database automatically
  componentDidMount() {
    // this.searchDB();
  }

  //this will search API
  searchNYTimes = (query, begin, end) => {
    API.search(query, begin, end)
      .then(res => {
        this.setState({ results: res });
        console.log(this.state.results, "test");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(">>>>>>>>>>", name, value);
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit");
    this.searchNYTimes(this.state.search, this.state.begin, this.state.end);
  };

  // //this will search database for saved articles
  // searchDB = (query, begin, end) => {
  //   console.log("mongo-searching....");
  //   MongoSearch.getArticles(query, begin, end)
  //     .then(res => {
  //       this.setState({ results: res });
  //       console.log(this.state.results, "test");
  //     })
  //     .catch(err => console.log(err));
  // };

  // // Loads all articles  and sets them to this.state.books
  // loadArticles = () => {
  //   MongoSearch.getArticles()
  //     .then(res =>
  //       this.setState({
  //         results: res.data,
  //         title: "",
  //         author: ""
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleSaveSubmit = event => {
    event.preventDefault();
    console.log("its working to save articles...")
    if (this.state.title && this.state.date) {
      API.postSaved({
        title: this.state.title,
        date: this.state.date
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          begin={this.state.begin}
          end={this.state.end}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <hr />
        <Results
          results={this.state.results}
          url={this.state.url}
          id={this.state.id}
          handleSaveSubmit={this.handleSaveSubmit}
        />

        <hr /><p><center>Something Amazing</center></p><hr />
        <Save
          results={this.state.results}
          // url={this.state.url}
          handleSaveArticle={this.deleteArticle}
        />
      </div>
    );
  }
}

export default SearchResultContainer;

// 1. componentDidMount calls API search query
// 2. Search Query - Queries the API - returns an array of objects
// 3. Pass the objects to the state
// 4. pass the state, update the state and
// 5. pass the state as a prop in the result component (line 48)
// 6. Inside the prop were mapping through the (prop.result) to the array of object
// 7. which is why it is being rendered to the browser
