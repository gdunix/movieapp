import React, { Fragment } from 'react';
import PageHeader from 'components/pageHeader';

const withPageLayout = ({ title = '' }) => WrappedComponent => props => (
    <Fragment>
        { title && <PageHeader>{title}</PageHeader> }
        <WrappedComponent {...props} />
    </Fragment>
);

export default withPageLayout;