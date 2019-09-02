import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from 'layout';
import Loader from 'components/loader';
import Main from 'pages/main';

const Movie = React.lazy(() => import(/* webpackChunkName: "Movie" */'pages/movie'));
const LatestSeen = React.lazy(() => import(/* webpackChunkName: "LatestSeen" */'pages/latestSeen'));
const ByYear = React.lazy(() => import(/* webpackChunkName: "ByYear" */'pages/byYear'));

const Routes = () => (
    <Router>
        <Layout>
            <Suspense fallback={<Loader />}>
                <Route exact path="/" render={() => <Main />} />
                <Route path="/movie/:movieId" render={props => <Movie {...props} />} />
                <Route exact path="/latest-seen" render={() => <LatestSeen />} />
                <Route exact path="/by-year" render={() => <ByYear />} />
            </Suspense>
        </Layout>
    </Router>
);

export default Routes;
