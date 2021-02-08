import { Fragment } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Directors = ({ directors = [] }) => {
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

Directors.propTypes = {
    directors: PropTypes.array,
};

export default Directors;