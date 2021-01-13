import compose from 'lodash/fp/compose';
import { connect } from 'react-redux';

import withData from 'hocs/withData';
import withCleanup from 'hocs/withCleanup';
import { actions, selectors } from 'store/latestSeen';
import withInfiniteScroll from 'hocs/withInfiniteScroll';

import Movies from './Movies';

const size = 15;

export default compose(
    connect(
        state => ({
            items: selectors.getMovies(state),
            isFetching: selectors.getMoviesIsLoading(state),
            end: selectors.getMoviesEnd(state),
        }),
        dispatch => ({
            fetchData() {
                dispatch(actions.fetchMoviesLatestSeen(1, size));         
            },
            getData() {
                dispatch(actions.fetchMoviesLatestSeenThrottled(size));
            },
            cleanup(){
                dispatch(actions.clear());
            }
        }),
    ),
    withData,
    withCleanup,
    withInfiniteScroll
)(Movies);