import { compose } from 'recompose';
import { connect } from 'react-redux';

import { actions, selectors } from 'store/movie';
import withData from 'hocs/withData';
import withLoader from 'hocs/withLoader';

import Movie from './Movie';

export default compose(
    connect(
        state => ({
            movie: selectors.getMovie(state)
        }),
        (dispatch, ownProps) => ({
            fetchData(){
                const id = ownProps.match.params.movieId;
                if(id) {
                    dispatch(actions.fetchMovieById(id));
                }           
            }
        })
    ),
    withLoader({ hide: true }),
    withData
)(Movie);