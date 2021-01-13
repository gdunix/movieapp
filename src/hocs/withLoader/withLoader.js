import Loader from 'components/loader';

const withLoader = ({ hide = false }) => WrappedComponent => ({ isLoading, ...props }) => (
    <>
        {!(isLoading && hide) && <WrappedComponent {...props} />}
        {isLoading && <Loader />}
    </>
);

export default withLoader;