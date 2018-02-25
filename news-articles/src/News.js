import React, { Component } from 'react';
import moment from 'moment';
// import './index.css';

const time = moment().format('MMMM Do YYYY, h:mm:ss a');;
class News extends Component {
  render() {
    return (
      <div className="News">
        <div className="News-header">
          <h2>Welcome to Newticles!</h2>
          <h3>Today is {time}</h3>
        </div>
        <p className="News-intro">
          Where the news articles are always served fresh.
        </p>
      </div>
    );
  }
}

export default News;
