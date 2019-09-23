import React, { useEffect } from 'react';
import throttle from 'lodash/throttle';

const THROTTLE_DELAY = 500;

const withInfiniteScroll = WrappedComponent => props => {

    const onScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
            && !props.isFetching 
        ) {
            props.getData();                      
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', throttle(onScroll, THROTTLE_DELAY));

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <WrappedComponent {...props} />;
};

export default withInfiniteScroll;