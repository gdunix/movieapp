import compose from 'lodash/fp/compose';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/byYear';
import withData from 'hocs/withData';

import Years from './Years';

export default compose(
    connect(
        (state) => ({
            years: selectors.getReleaseDates(state)
        }),
        dispatch => ({
            fetchData() {
                dispatch(actions.fetchReleaseDates());
            },
            fetchDataByDate(year) {
                dispatch(actions.fetchMoviesByReleaseDate(year));
            }
        })
    ),
    withData
)(Years);