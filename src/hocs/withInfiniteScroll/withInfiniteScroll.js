import React, { useEffect } from 'react';
import throttle from 'lodash/throttle';

const THROTTLE_DELAY = 1000;

const withInfiniteScroll = WrappedComponent => props => {

    const onScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
            && !props.isFetching 
        ) {
            props.getData();                      
        }
    };

    const handleTouchEnd = (e) => {
        e.preventDefault(); 
        handleScroll();
      }

    useEffect(() => {
        window.addEventListener('scroll', throttle(onScroll, THROTTLE_DELAY));
        window.addEventListener('touchend', handleTouchEnd)

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('touchend', handleTouchEnd)
        }
    }, []);

    return <WrappedComponent {...props} />;
};

export default withInfiniteScroll;