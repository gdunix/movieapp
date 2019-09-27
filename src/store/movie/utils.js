export const formatMovie = movie => ({ 
    ...movie,
    imageURL: movie ? `https://image.tmdb.org/t/p/w500${movie.imageURL}` : ''
});