import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import DividerExampleForm from './components/Search/Search';

    const App = (
        <Router>
            <div>
                <Route component={Header} />
                <Route component={DividerExampleForm} />
            </div>
        </Router>
    );

export default App;