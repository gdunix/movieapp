import { compose } from 'recompose';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/main';
import withData from 'hocs/withData';

import Main from './Main';

export default compose(
    connect(
        state => ({
            movies: selectors.getMain(state)
        }),
        dispatch => ({
            fetchData() {
                dispatch(actions.fetchRecentMovies());
            }
        })
    ),
    withData
)(Main);