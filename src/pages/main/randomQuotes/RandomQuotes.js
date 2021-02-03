import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as S from './styled';

const RandomQuotes = ({ movies, refetch }) => {
    useEffect(() => {
        const interval = setInterval(() => { refetch(); }, 1000 * 10);
        return () => clearInterval(interval);
    })
    return (
        <S.Container>
            {movies.map(({ movieId, movie, url, quote }, index) => (
                <Link
                    to={`/movie/${movieId}`}
                    key={index}>
                    <S.MovieContainer>
                        <S.ViewContainer>
                            <S.ImageContainer>
                                <S.StyledImage src={url} alt={movie} />
                            </S.ImageContainer>
                            <S.DetailsContainer>
                                <S.Quote>{quote}</S.Quote>
                            </S.DetailsContainer>
                        </S.ViewContainer>
                    </S.MovieContainer>
                </Link>
            )
            )}
        </S.Container>
    )
};

RandomQuotes.propTypes = {
    movies: PropTypes.array.isRequired,
    refetch: PropTypes.func.isRequired,
};

export default RandomQuotes;