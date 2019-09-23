import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import * as S from './styled';

const constructLink = (type, id) => `${type}/${id}`;

const Poster = ({ id, type, name, url }) => (
    <S.Card>
        <Link to={constructLink(type, id)}>
            <S.Img src={url} title={name} />
        </Link>
    </S.Card>
);

Poster.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Poster;