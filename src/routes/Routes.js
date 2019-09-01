import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from 'layout';
import Main from 'pages/main';
import Movie from 'pages/movie';

const Routes = () => (
    <Router>
        <Layout>
            <Route exact path="/" render={() => <Main />} />
            <Route path="/movies/:movieId" render={props => <Movie {...props} />} />
        </Layout>
    </Router>
);

export default Routes;
