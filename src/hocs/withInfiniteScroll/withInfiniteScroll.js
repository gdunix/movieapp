import React, { useEffect } from 'react';

const withInfiniteScroll = WrappedComponent => ({ end, getData, ...props }) => {
    const onScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
            && !end
        ) {          
            getData();                      
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [end]);

    return <WrappedComponent {...props} />;
};

export default withInfiniteScroll;