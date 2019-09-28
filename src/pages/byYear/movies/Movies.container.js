import { compose } from 'recompose';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/byYear';
import withData from 'hocs/withData';
import withLoader from 'hocs/withLoader';
import { PostersWithRating } from 'components/posters';

export default compose(
    connect(
        state => ({
            items: selectors.getMovies(state),
            isLoading: selectors.getMovieByReleaseDateLoading(state)
        }),
        (dispatch, { latestReleaseDate }) => ({
            fetchData() {
                if(latestReleaseDate) {
                    dispatch(actions.fetchMoviesByReleaseDate(latestReleaseDate))
                }                    
            }
        })
    ),
    withData,
    withLoader({})
)(PostersWithRating);