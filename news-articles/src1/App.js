import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact component={Container} />
      </Switch>
    </div>
  </Router>;

export default App;
