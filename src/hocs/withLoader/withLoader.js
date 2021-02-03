
import Loader from 'components/loader';

const withLoader = ({ hide = false }) => WrappedComponent => ({ isLoading, ...props }) => (
    <div>
        {isLoading && <Loader />}
        {!(isLoading && hide) && <WrappedComponent {...props} />}
    </div>
);

export default withLoader;