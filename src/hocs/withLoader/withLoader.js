import React, { Fragment } from 'react';
import Loader from 'components/loader';

const withLoader = WrappedComponent => props => (
    <Fragment>
        <WrappedComponent {...props} />
        {props.isLoading && <Loader />}
    </Fragment>
);

export default withLoader;