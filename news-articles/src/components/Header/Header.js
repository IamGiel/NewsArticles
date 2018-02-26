import React, { Component } from 'react';
import moment from 'moment';
import "../Styler/Styler.css";

const time = moment().format('MMMM Do YYYY');
class News extends Component {
  render() {

    return (
        <div className="GelStyle">
          <h1 className="length">Welcome to NewArticles!</h1>
          <h3>Today is {time}</h3>
        </div>
    )
  }
}
export default News;

