import { actions as apiActions } from 'store/api';
import paths from './paths';

const fetchReleaseDates = () =>
    apiActions.apiGet({
        path: `${paths.movieReleaseDates}`,
        key: paths.movieReleaseDates
    });

const fetchMoviesByReleaseDate = date =>
    apiActions.apiGet({
        path: `${paths.moviesByReleaseDate}/${date}`,
        key: paths.moviesByReleaseDate
    });

const clearDates = () =>
    apiActions.clear(paths.movieReleaseDates);

const clearMovies = () =>
    apiActions.clear(paths.moviesByReleaseDate);


export default {
    fetchReleaseDates,
    fetchMoviesByReleaseDate,
    clearDates,
    clearMovies
};