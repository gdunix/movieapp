import compose from 'lodash/fp/compose';
import { connect } from 'react-redux';

import { PostersWithRating } from 'components/posters';
import { actions, selectors } from 'store/main';
import withData from 'hocs/withData';
import withLoader from 'hocs/withLoader';
import withTitle from 'hocs/withTitle';

export default compose(
    connect(
        state => ({
            items: selectors.getRecentMovies(state),
            isLoading: selectors.getRecentMoviesLoading(state),
            title: 'Latest Seen'
        }),
        dispatch => ({
            fetchData() {
                dispatch(actions.fetchRecentMovies());
            }
        })
    ),
    withLoader({ hide: false }),
    withData,
    withTitle
)(PostersWithRating);