import compose from 'lodash/fp/compose';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/movie';
import withData from 'hocs/withData';
import withCleanup from 'hocs/withCleanup';
import withLoader from 'hocs/withLoader';

import Movie from './Movie';

export default compose(
    connect(
        state => ({
            movie: selectors.getMovie(state),
            isLoading: selectors.getMovieLoading(state),
        }),
        (dispatch, ownProps) => ({
            fetchData(){
                const id = ownProps.match.params.movieId;
                if(id) {
                    dispatch(actions.fetchMovieById(id));
                }
            },
            cleanup(){
                dispatch(actions.clearMovie());
            }
        })
    ),
    withData,
    withCleanup,
    withLoader({ hide: true }),
)(Movie);