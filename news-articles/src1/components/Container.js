import React, { Component } from 'react';
import Cards from './Cards';
import API from "../utils/API";
import ArticleDetail from './ArticleDetail';


//this is my container
class Container extends Component {
    state = {
			searchTerm: "",
			results: [],
			startYear: 0,
			endYear: 0
		}

	componentDidMount(){
		this.searchArticles("");
	};

	searchArticles = query => {
		API.search(query)
			.then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
      console.log(query);
	}

	handleInputChange = event => {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
		});
	};
//change this to Articles
	render() {
    return (
      <Cards
          heading={this.state.results || "Search for a topic"}
        >
          {this.state.results
            ? <ArticleDetail
              title={this.state.results}
            />
            : <h3>No Results to Display</h3>}
      </Cards>
    );
  }
};

export default Container;

