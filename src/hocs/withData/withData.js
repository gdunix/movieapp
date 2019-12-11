import React, { useEffect } from 'react';

const withData = WrappedComponent => ({ condition = [], ...props }) => {
    console.log(condition);
    useEffect(() => {
        props.fetchData();
    }, condition);

    return <WrappedComponent {...props} />
};

export default withData;