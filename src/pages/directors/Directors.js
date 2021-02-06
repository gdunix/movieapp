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
                        {directors.filter(d => d._id.startsWith(letter))
                            .map(({ _id, sum }, index) =>
                                (<S.Director
                                    key={index} to={`/by-director/${_id}`}
                                    count={sum}>{_id}
                                </S.Director>)
                            )}
                    </Fragment>
                )
                )
            }
        </S.Container>
    );
};

export default Directors;