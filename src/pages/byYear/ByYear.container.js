import { compose } from 'recompose';
import { connect } from 'react-redux';
import get from 'lodash/fp/get';

import withPageLayout from 'hocs/withPageLayout';
import withCleanup from 'hocs/withCleanup';
import { actions, selectors } from 'store/byYear';

import ByYear from './ByYear';

export default compose(
    connect( 
        (state, ownProps) => ({
            selectedYear: get(['match','params','year'])(ownProps) || selectors.getLatestReleaseDate(state)
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