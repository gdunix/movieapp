export const formatMovie = movie => ({
    ...movie,
    imageURL: movie.imageURL ? `https://image.tmdb.org/t/p/w400${movie.imageURL}` : ''
});