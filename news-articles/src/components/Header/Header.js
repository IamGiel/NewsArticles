import React, { Component } from 'react';
import moment from 'moment';
import './Header.css';

const time = moment().format('MMMM Do YYYY');
class News extends Component {
  render() {

    return (
        <div className="News">
          <div className="News-header">
          <h1 className="length">Welcome to NewArticles!</h1>
          <h3>Today is {time}</h3>
          </div>
        </div>
    )
  }
}
export default News;

