import { compose } from 'recompose';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/byYear';
import withData from 'hocs/withData';

import Years from './years';

export default compose(
    connect(
        state => ({
            years: selectors.getReleaseDates(state)
        }),
        dispatch => ({
            fetchData() {
                dispatch(actions.fetchReleaseDates());
            }
        })
    ),
    withData
)(Years);