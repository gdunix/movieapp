import React, { Fragment } from 'react';
import PageHeader from 'components/pageHeader';

const withPageLayout = ({ title = '' }) => WrappedComponent => ({ pageTitle, ...props}) => (
    <Fragment>
        { title && <PageHeader>{title}</PageHeader> }
        { pageTitle && <PageHeader>{pageTitle}</PageHeader> }
        <WrappedComponent {...props} />
    </Fragment>
);

export default withPageLayout;