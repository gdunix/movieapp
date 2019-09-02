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
        (dispatch, ownProps) => ({
            fetchData() {
                if(ownProps.selectedYear) {
                    dispatch(actions.fetchMoviesByReleaseDate(ownProps.selectedYear))
                }                    
            }
        })
    ),
    withData,
    withLoader
)(PostersWithRating);