import { useEffect } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const withData = WrappedComponent => ({ condition = [], fetchData, ...props }) => {
    useEffect(() => {
        fetchData();
    }, condition);

    return <WrappedComponent {...props} />;
};

withData.propTypes = {
    condition: PropTypes.array,
    fetchData: PropTypes.func.isRequired,
};

export default withData;