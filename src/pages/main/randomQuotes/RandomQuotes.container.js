import compose from 'lodash/fp/compose';
import { connect } from 'react-redux';
import { actions, selectors } from 'store/quotes';
import withData from 'hocs/withData';
import withLoader from 'hocs/withLoader';
import withTitle from 'hocs/withTitle';

import RandomQuotes from './RandomQuotes';

export default compose(
    connect(
        state => ({
            movies: selectors.getRandomQuotes(state),
            isLoading: selectors.getRandomQuotesLoading(state),
            title: 'Quotes'
        }),
        dispatch => ({
            fetchData() {
                dispatch(actions.fetchRandomQuotes());
            },
            refetch() {
                dispatch(actions.fetchRandomQuotes());
            },
        })
    ),
    withLoader({ hide: false }),
    withData,
    withTitle
)(RandomQuotes);