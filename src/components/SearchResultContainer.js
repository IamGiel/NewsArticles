import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import Save from "./Save";

import API from "../utils/API";


class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    begin: "",
    end: "",
    saved:""
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchNYTimes();
  }

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

  removeArticle = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const articleResults = this.state.results.filter(res => res.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ articleResults });
  };

  handleArticleOnClick = event => {
    event.preventDefault();
    console.log("handleArticleOnClick");
    this.searchNYTimes(this.state.url);
  };

  handleSaveArticle = event => {
    event.preventDefault();
    console.log("handleSaveArticle");
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
    // event.preventDefault();
    // console.log("saving article...");
    // this.searchNYTimes(this.state.results);
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
          handleDateChange={this.handleDateChange}
        />

        <Results
          results={this.state.results}
          url={this.state.url}
          handleSaveArticle={this.handleSaveArticle}
        />
        <Save
          results={this.state.results}
          url={this.state.url}
          handleSaveArticle={this.handleSaveArticle}
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
