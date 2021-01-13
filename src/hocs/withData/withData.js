import { useEffect } from 'react';

const withData = WrappedComponent => ({ condition = [], ...props }) => {
    useEffect(() => {
        props.fetchData();
    }, condition);

    return <WrappedComponent {...props} />
};

export default withData;