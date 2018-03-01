import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Panel from "./Panel";
import Search from "./Search";
import ArticleDetail from "./ArticleDetail";
import API from "../utils/API";
// import Results from "./Results";


class NYTArticles extends Component {
  state = {
    results: {},
    search: "",
  };


  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchArticles();
  }

  // componentDidUpdate() {
  //   // Check whether we have a new queryURL.
  //   if(this.state.searched !== this.state.term + this.state.begin + this.state.end) {
  //     this.setState({
  //       searched: this.state.term + this.state.begin + this.state.end
  //     });
  //     // Run the query for the address
  //     API.searchArticles(this.state.term, this.state.begin, this.state.end).then(function (data) {
  //       if (data) {
  //         if (JSON.stringify(data) !== JSON.stringify(this.state.results)) {
  //           this.setState({ results: data });
  //         }
  //       } else {
  //         this.setState({ message: 'No results found!' })
  //       }
  //     }.bind(this));
  //   }
  // }

  searchArticles = query => {
    API.search(query)
      .then(res => {this.setState({ results: res.data })
        console.log("RES>>>>>>>>>>", res);
    })
      .catch(err => console.log(err));
  };
  // Going to allow users to type and store values
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    console.log("firing here handle input change >>>>")
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the NYT API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("firing here handle form submit >>>>")
    this.searchArticles(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>

          <Col size="md-6">
            <ArticleDetail>
              <Panel
                heading={this.state.results.Title || "Search for an article"}
              >
              </Panel>
              {this.state.results}
            </ArticleDetail>
          </Col>

          <Col size="md-6">
            <Panel heading="Search">
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NYTArticles;
