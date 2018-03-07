var React = require('react');

var Footer = React.createClass({
    render: function() {
        return <footer>
            <div className="container">
              <h5>
                Search the archives of <a href="https://nytimes.com/">
                  The New York Times
                </a>! by <a href="https://github.com/IamGiel/NewsArticles">
                  Gel
                </a>.
              </h5>
            </div>
          </footer>;
    }
});

module.exports = Footer;