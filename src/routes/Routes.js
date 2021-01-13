import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from 'layout';
import Loader from 'components/loader';
import Main from 'pages/main';

const Movie = lazy(() => import(/* webpackChunkName: "Movie" */'pages/movie'));
const LatestSeen = lazy(() => import(/* webpackChunkName: "LatestSeen" */'pages/latestSeen'));
const ByYear = lazy(() => import(/* webpackChunkName: "ByYear" */'pages/byYear'));
const ByDecade = lazy(() => import(/* webpackChunkName: "ByDecade" */'pages/byDecade'));

const Routes = () => (
    <Router>
        <Layout>
            <Suspense fallback={<Loader />}>
                <Route exact path="/" render={() => <Main />} />
                <Route path="/movie/:movieId" render={props => <Movie {...props} />} />
                <Route exact path="/latest-seen" render={() => <LatestSeen />} />
                <Route exact path="/by-year" render={() => <ByYear />} />
                <Route path="/by-year/:year" render={props => <ByYear {...props} />} />
                <Route path="/by-decade/:from-:to" render={props => <ByDecade {...props} />} />
            </Suspense>
        </Layout>
    </Router>
);

export default Routes;
