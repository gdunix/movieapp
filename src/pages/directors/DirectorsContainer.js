import compose from 'lodash/fp/compose';
import { connect } from 'react-redux';
import { actions, selectors } from 'store/directors';
import withData from 'hocs/withData';
import withPageLayout from 'hocs/withPageLayout';
import withLoader from 'hocs/withLoader';
import withCleanup from 'hocs/withCleanup';

import Directors from './Directors';

export default compose(
    connect(
        (state) => ({
            directors: selectors.getDirectors(state),
            isLoading: selectors.getDirectorsLoading(state),
        }),
        dispatch => ({
            fetchData() {
                dispatch(actions.fetchDirectors());
            },
            cleanup(){
                dispatch(actions.clearDirectors());
            }
        })
    ),
    withData,
    withCleanup,
    withLoader({}),
    withPageLayout({ title: 'Directors' })
)(Directors);