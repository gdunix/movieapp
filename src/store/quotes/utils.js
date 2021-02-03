export const formatMovies = movies => movies.map(({ url, quote, ...rest }) => ({
    url: `https://image.tmdb.org/t/p/w200${url}`,
    quote: quote.length > 100 ? `${quote.substring(0, 140)}...` : quote,
    ...rest,
}))