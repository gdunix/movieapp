import React, { Fragment } from 'react';

import Years from './years';
import Movies from './movies';

const ByYear = ({ selectedYear }) => (
    <Fragment>
        <Years selectedYear={selectedYear} />
        {selectedYear && <Movies selectedYear={selectedYear} />}
    </Fragment>
);

export default ByYear;