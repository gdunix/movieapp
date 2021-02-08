import compose from 'lodash/fp/compose';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/byYear';
import withData from 'hocs/withData';
import withLoader from 'hocs/withLoader';
import { PostersWithRating } from 'components/posters';

export default compose(
    connect(
        (state, {selectedYear}) => ({
            items: selectors.getMovies(state),
            isLoading: selectors.getMovieByReleaseDateLoading(state),
            condition: selectedYear ? [selectedYear] : []
        }),
        (dispatch, { selectedYear }) => ({
            fetchData() {
                if(selectedYear) {
                    dispatch(actions.fetchMoviesByReleaseDate(selectedYear));
                }
            }
        })
    ),
    withData,
    withLoader({})
)(PostersWithRating);