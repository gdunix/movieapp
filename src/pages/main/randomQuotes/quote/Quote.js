import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as S from './styled';

const Quote = ({
    movieId,
    movie,
    url,
    quoteSm,
    quote,
    hasMore = false,
    index,
    hoverItem,
    setHoverItem
}) => {
    const onMouseOver = () => setHoverItem(index);
    const onMouseOut = () => setHoverItem(-1);
    const hover = index === hoverItem;
    return (
        <Link
            to={`/movie/${movieId}`}
            key={index}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}>
            <S.MovieContainer hover={hover && hasMore}>
                <S.ViewContainer>
                    <S.ImageContainer>
                        <S.StyledImage src={url} alt={movie} />
                    </S.ImageContainer>
                    <S.DetailsContainer>
                        <S.Quote>{hover ? quote : quoteSm}</S.Quote>
                    </S.DetailsContainer>
                </S.ViewContainer>
            </S.MovieContainer>
        </Link>
    );
};

Quote.propTypes = {
    movieId: PropTypes.string.isRequired,
    movie: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    quoteSm: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    hasMore: PropTypes.bool,
    index: PropTypes.number.isRequired,
    hoverItem: PropTypes.number.isRequired,
    setHoverItem: PropTypes.func.isRequired,
};

export default Quote;