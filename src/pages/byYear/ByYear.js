import React, { Fragment } from 'react';

import Years from './years';
import Movies from './movies';

const ByYear = ({ latestReleaseDate }) => (
    <Fragment>
        <Years latestReleaseDate={latestReleaseDate} />
        {latestReleaseDate && <Movies latestReleaseDate={latestReleaseDate} />}
    </Fragment>
);

export default ByYear;