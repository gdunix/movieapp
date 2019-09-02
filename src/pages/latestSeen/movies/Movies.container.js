import { compose } from 'recompose';
import { connect } from 'react-redux';

import withData from 'hocs/withData';
import { actions, selectors } from 'store/latestSeen';
import withInfiniteScroll from 'hocs/withInfiniteScroll';

import Movies from './Movies';

const size = 15;

export default compose(
    connect(
        state => ({
            items: selectors.getMovies(state),
            isFetching: selectors.getMoviesIsLoading(state),
        }),
        dispatch => ({
            fetchData() {
                dispatch(actions.fetchMoviesLatestSeen(1, size));         
            },
            getData() {
                dispatch(actions.fetchMoviesLatestSeenThrottled(size));
            }
        }),
    ),
    withData,
    withInfiniteScroll
)(Movies);