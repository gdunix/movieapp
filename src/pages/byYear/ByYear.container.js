import { compose, withStateHandlers, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import withPageLayout from 'hocs/withPageLayout';
import { actions, selectors } from 'store/byYear';

import ByYear from './ByYear';

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
        (state, { releaseDate }) => ({
            selectedYear: releaseDate || selectors.getLatestReleaseDate(state)
        }),
        dispatch => ({
            fetchDataByDate(year) {
                dispatch(actions.fetchMoviesByReleaseDate(year));
            }
        })
    ),
    withHandlers({
        onChange: ({ onDateChange, fetchDataByDate }) => event => {
            event.preventDefault();
            const value = event.target.getAttribute('href');
            onDateChange(value);
            fetchDataByDate(value);
        }
    }),
    withPageLayout({ title: 'By Year' })
)(ByYear);