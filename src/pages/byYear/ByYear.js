import React, { Fragment } from 'react';

import Years from './years';
import Movies from './movies';

const ByYear = ({ selectedYear, onChange }) => (
    <Fragment>
        <Years selectedYear={selectedYear} onChange={onChange} />
        { selectedYear && <Movies selectedYear={selectedYear} /> }
    </Fragment>
);

export default ByYear;