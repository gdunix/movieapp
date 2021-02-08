import PropTypes from 'prop-types';
import * as S from './styled';

const Quotes = ({ quotes=[] }) => (
    <>
        {
            quotes && quotes.map(({text}, index) => (
                <S.Blockquote key={index}>
                    {text}
                </S.Blockquote>
            ))
        }
    </>
);

Quotes.propTypes = {
    quotes: PropTypes.array,
};

export default Quotes;