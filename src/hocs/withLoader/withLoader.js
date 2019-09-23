import React, { Fragment } from 'react';
import Loader from 'components/loader';

const withLoader = ({ hide = false }) => WrappedComponent => ({ isLoading, ...props }) => (
    <Fragment>
        {!(isLoading && hide) && <WrappedComponent {...props} />}
        {isLoading && <Loader />}
    </Fragment>
);

export default withLoader;