import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Panel from "./Panel";
import Search from "./Search";
import ArticleDetail from "./ArticleDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies("");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
    console.log(query);
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log(event);
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
    console.log(event);

  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Panel
              heading={this.state.result.Title || "Search a subject"}
            >
              {this.state.result.Title
                ? <ArticleDetail
                    title={this.state.result.Title}
                    src={this.state.result.Poster}
                    director={this.state.result.Director}
                    genre={this.state.result.Genre}
                    released={this.state.result.Released}
                  />
                : <h3>No Results to Display</h3>}
            </Panel>
          </Col>
          <Col size="md-4">
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

export default OmdbContainer;
