import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Layout from 'layout';
import Main from 'pages/main';

const Routes = () => (
    <Router>
        <Layout>
            <Route exact path="/" render={() => <Main />} />
        </Layout>
    </Router>
);

export default Routes;
