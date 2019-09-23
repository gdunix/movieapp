import React, { Fragment } from 'react';

import LatestSeen from './latestSeen';
import Best from './best';

const Main = () => (
    <Fragment>
        <Best />
        <LatestSeen />
    </Fragment>
);

export default Main;