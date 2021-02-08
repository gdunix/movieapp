import PropTypes from 'prop-types';
import Rating from 'components/rating';

import * as S from './styled';

const MainInfo = ({ title, imageURL, release_date, grade, overview, director, tagline }) => (
    <S.Container>
        <S.ViewContainer>
            <S.ImageContainer>
                {imageURL && <S.StyledImage alt={title} src={imageURL} />}
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
                    <p><S.Link to={`/by-director/${director}`}>{director}</S.Link></p>
                </div>
                <S.Tagline>
                    <span>{tagline}</span>
                </S.Tagline>
            </S.DetailsContainer>
        </S.ViewContainer>
    </S.Container>
);

MainInfo.propTypes = {
    title: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired
};

export default MainInfo;