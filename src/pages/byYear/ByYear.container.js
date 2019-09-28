import { compose } from 'recompose';
import { connect } from 'react-redux';

import withPageLayout from 'hocs/withPageLayout';
import withCleanup from 'hocs/withCleanup';
import { actions, selectors } from 'store/byYear';

import ByYear from './ByYear';

export default compose(
    connect( 
        state => ({
            latestReleaseDate: selectors.getLatestReleaseDate(state)
        }),
        dispatch => ({
            cleanup(){
                dispatch(actions.clearDates());
                dispatch(actions.clearMovies());
            }
        })
    ),
    withCleanup,
    withPageLayout({ title: 'By Year' })
)(ByYear);