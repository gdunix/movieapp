import compose from 'lodash/fp/compose';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/byDecade';
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
            condition: [ownProps.match.params.from, ownProps.match.params.to],
            pageTitle: `Best of ${ownProps.match.params.from} - ${ownProps.match.params.to}`
        }),
        (dispatch, ownProps) => ({
            fetchData(){
                const { from, to } = ownProps.match.params;
                console.log(from)
                if(!!from && !!to) {
                    dispatch(actions.fetchMovies({from, to}));
                }                    
            },
            cleanup(){
                dispatch(actions.clearMovies());
            }
        })
    ),
    withData,
    withCleanup,
    withLoader({}),
    withPageLayout({})
)(PostersWithRating);