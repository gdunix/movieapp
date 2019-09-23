import React from 'react';

import Rating from 'components/rating';

import * as S from './styled';

const constructURL = url => `https://image.tmdb.org/t/p/w600_and_h900_bestv2${url}`;

const MainInfo = ({ title, imageURL, release_date, grade, overview, director, tagline }) => (
    <S.Container>
        <S.ViewContainer>
            <S.ImageContainer>
                <S.StyledImage alt={title} src={constructURL(imageURL)} />
            </S.ImageContainer>
            <S.DetailsContainer>
                <S.Title>
                    <span>{title}</span>
                    <S.ReleaseDate>({release_date})</S.ReleaseDate>
                </S.Title>
                <Rating grade={grade} starDimension="32px" starSpacing="0.1px" />
                <S.Overview>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                </S.Overview>
                <div>
                    <h3>Director</h3>
                    <p>{director}</p>
                </div>
                <S.Tagline>
                    <span>{tagline}</span>
                </S.Tagline>
            </S.DetailsContainer>
        </S.ViewContainer>
    </S.Container>
);

export default MainInfo;