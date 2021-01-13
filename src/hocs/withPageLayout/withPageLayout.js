import PageHeader from 'components/pageHeader';

const withPageLayout = ({ title = '' }) => WrappedComponent => ({ pageTitle, ...props}) => (
    <>
        { title && <PageHeader>{title}</PageHeader> }
        { pageTitle && <PageHeader>{pageTitle}</PageHeader> }
        <WrappedComponent {...props} />
    </>
);

export default withPageLayout;