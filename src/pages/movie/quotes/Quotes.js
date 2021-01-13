import * as S from './styled';

const Quotes = ({ quotes }) => (
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

export default Quotes;