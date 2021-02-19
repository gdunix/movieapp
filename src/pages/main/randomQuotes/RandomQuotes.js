import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Quote from './quote';
import * as C from './constants';
import * as S from './styled';

const RandomQuotes = ({ movies, refetch }) => {
    useEffect(() => {
        const interval = setInterval(() => { refetch(); }, C.DELAY);
        return () => clearInterval(interval);
    });
    const [hoverItem, setHoverItem] = useState(-1);
    return (
        <S.Container>
            {movies.map((movie, index) => (
                <Quote
                    key={index}
                    index={index}
                    hoverItem={hoverItem}
                    setHoverItem={setHoverItem}
                    {...movie} />
            ))}
        </S.Container>
    );
};

RandomQuotes.propTypes = {
    movies: PropTypes.array.isRequired,
    refetch: PropTypes.func.isRequired,
};

export default RandomQuotes;