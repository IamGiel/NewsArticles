import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import DividerExampleForm from './components/Search/Search';
import ArticleList from './components/ArticleList/ArticleList';
import Saved from './components/Saved/Saved';



    const App = (
        <Router>
            <div>
                <Route component={Header} />
                <Route component={DividerExampleForm} />
                <Route component={ArticleList} />
                <Route component={Saved} />
            </div>
        </Router>
    );

export default App;