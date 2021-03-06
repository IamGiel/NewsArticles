// Dependencies
var express = require("express");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Set up a static folder (public) for our web app
// This line tells `app` to look inside client/build folder and search for a static file (html)
// and to display the file called `index.html` at the root
app.use(express.static("client/build"));

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "articles";
var collections = ["NYTimesArticles"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// 1. At the root path, send a simple hello world message to the browser
app.get("/", function(req, res) {
  res.send("Hello world");
});

// 2. At the "/all" path, display every entry in the [article] collection
app.get("/api/saved", function(req, res) {
  // console.log();
  console.log("server.js firing >>>>>",req.body);
  res.json(true);
  // Query: In our database, go to the [NYTimesArticles] collection, then "find" everything
  // db.NYTimesArticles.find({}, function(error, found) {
  //   // Log any errors if the server encounters one
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     // Otherwise, send the result of this query to the browser
  //     res.json(found);
  //   }
  // });
});

// 3. At the "/name" path, display every entry in the [NYTimesArticles] collection, sorted by [date]
app.get("/begin", function(req, res) {
  // Query: In our database, go to the [NYTimesArticles] collection, then "find" everything,
  // but this time, sort it by begin (1 means ascending order)
  db.animals.find().sort({ begin: 1 }, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    } else {
      // Otherwise, send the result of this query to the browser
      res.json(found);
    }
  });
});

// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
