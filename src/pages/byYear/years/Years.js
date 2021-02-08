import PropTypes from 'prop-types';
import * as S from './styled';

const Years = ({ years = [], selectedYear }) => (
    <S.Container>
        {
            years && years.map((year, index) =>
                <S.Year key={index} to={`/by-year/${year}`} selected={(year == selectedYear)}>{year}</S.Year>
            )
        }
    </S.Container>
);

Years.propTypes = {
    years: PropTypes.array,
    selectedYear: PropTypes.string.isRequired,
};

export default Years;