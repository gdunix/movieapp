import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from 'layout';
import Main from 'pages/main';
import Movie from 'pages/movie';
import LatestSeen from 'pages/latestSeen';

const Routes = () => (
    <Router>
        <Layout>
            <Route exact path="/" render={() => <Main />} />
            <Route path="/movies/:movieId" render={props => <Movie {...props} />} />
            <Route exact path="/latest-seen" render={() => <LatestSeen />} />
        </Layout>
    </Router>
);

export default Routes;
