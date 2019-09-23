import { compose } from 'recompose';
import { connect } from 'react-redux';

import { PostersWithRating } from 'components/posters';
import { actions, selectors } from 'store/main';
import withData from 'hocs/withData';
import withLoader from 'hocs/withLoader';
import withTitle from 'hocs/withTitle';

export default compose(
    connect(
        state => ({
            items: selectors.getBest(state),
            isLoading: selectors.getBestLoading(state),
            title: 'Cream of the Crop'
        }),
        dispatch => ({
            fetchData() {
                dispatch(actions.fetchBest());
            }
        })
    ),
    withLoader({ hide: false }),
    withData,
    withTitle
)(PostersWithRating);