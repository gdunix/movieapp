import { compose, withStateHandlers, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/byYear';
import withData from 'hocs/withData';

import Years from './Years';

export default compose(
    withStateHandlers(
        () => ({ releaseDate: undefined }),
        {
          onDateChange: () => year => ({
            releaseDate: year,
          })
        }
    ),
    connect(
        (state, { latestReleaseDate, releaseDate }) => ({
            years: selectors.getReleaseDates(state),
            selectedYear: releaseDate || latestReleaseDate
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
    withData,
    withHandlers({
        onChange: ({ onDateChange, fetchDataByDate }) => event => {
            event.preventDefault();
            const value = event.target.getAttribute('href');
            onDateChange(value);
            fetchDataByDate(value);
        }
    }),
)(Years);