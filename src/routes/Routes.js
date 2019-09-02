import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from 'layout';
import Main from 'pages/main';
import Movie from 'pages/movie';
import LatestSeen from 'pages/latestSeen';
import ByYear from 'pages/byYear';

const Routes = () => (
    <Router>
        <Layout>
            <Route exact path="/" render={() => <Main />} />
            <Route path="/movie/:movieId" render={props => <Movie {...props} />} />
            <Route exact path="/latest-seen" render={() => <LatestSeen />} />
            <Route exact path="/by-year" render={() => <ByYear />} />
        </Layout>
    </Router>
);

export default Routes;
