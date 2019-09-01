import React, { useEffect } from 'react';

const withData = WrappedComponent => props => {
    useEffect(() => {
        props.fetchData();
    }, []);

    return <WrappedComponent {...props} />
};

export default withData;