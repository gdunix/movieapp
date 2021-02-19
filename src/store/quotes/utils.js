export const formatMovies = movies => movies.map(({ url, quote, ...rest }) => ({
    url: `https://image.tmdb.org/t/p/w200${url}`,
    quoteSm: quote.length > 140 ? `${quote.substring(0, 140)}...` : quote,
    quote,
    hasMore: quote.length > 140,
    ...rest,
})).sort((a,b) => a.quote.length - b.quote.length);