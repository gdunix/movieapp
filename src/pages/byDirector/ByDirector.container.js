import compose from 'lodash/fp/compose';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/byDirector';
import withData from 'hocs/withData';
import withLoader from 'hocs/withLoader';
import withCleanup from 'hocs/withCleanup';
import withPageLayout from 'hocs/withPageLayout';
import { PostersWithRating } from 'components/posters';

export default compose(
    connect(
        (state, ownProps) => ({
            items: selectors.getMovies(state),
            isLoading: selectors.getMoviesLoading(state),
            pageTitle: `${ownProps.match.params.director}`
        }),
        (dispatch, ownProps) => ({
            fetchData() {
                const { director } = ownProps.match.params;
                if (!!director) {
                    dispatch(actions.fetchMovies({ director }));
                }
            },
            cleanup() {
                dispatch(actions.clearMovies());
            }
        })
    ),
    withData,
    withCleanup,
    withLoader({}),
    withPageLayout({})
)(PostersWithRating);