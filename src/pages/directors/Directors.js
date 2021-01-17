import { Fragment } from 'react';

import * as S from './styled';

const Directors = ({ directors }) => {
    const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    return (
        <S.Container>
            {
                alphabet.map(letter => (
                    <Fragment key={letter}>
                        <S.Letter>{letter}</S.Letter>
                        {directors.filter(d => d.startsWith(letter))
                            .map((director, index) =>
                                (<S.Director key={index} to={`/by-director/${director}`}>{director}</S.Director>)
                            )}
                    </Fragment>
                )
                )
            }
        </S.Container>
    )
};

export default Directors;