export const formatMovies = movies => movies.map(({ _id, title, imageURL, grade }) => ({
    id: _id,
    type: 'movie',
    name: title,
    url: `https://image.tmdb.org/t/p/w200${imageURL}`,
    grade
}));