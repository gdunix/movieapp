import { useEffect } from 'react';

const withCleanup = WrappedComponent => props => {
    useEffect(() => {
        return () => props.cleanup();
    }, []);

    return <WrappedComponent {...props} />
};

export default withCleanup;