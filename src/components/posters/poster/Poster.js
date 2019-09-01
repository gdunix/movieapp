import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const constructLink = (type, id) => `${type}/${id}`;

const Poster = ({ id, type, name, url }) => (
    <S.Card>
        <a href={constructLink(type, id)} alt={name}>
            <S.Img src={url} title={name} />
        </a>
    </S.Card>
);

Poster.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Poster;