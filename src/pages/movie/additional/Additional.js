import React from 'react';

import * as S from './styled';

const Actor = ({ index, name, character }) => (
    <li key={index}>
        <span>{name}</span> ({character})
    </li>
);

const Additional = ({ actors, genres }) => (
    <S.Additional>
        <div>
            <h3>Actors</h3>
            <ol>
                {
                    actors && actors.map((actor, index) =>
                        <Actor key={index} {...actor} />
                    )
                }
            </ol>
        </div>
        <div>
            <h3>Genres</h3>
            <ol>
                {
                    genres && genres.map((genre, index) =>
                        <li key={index}>{genre}</li>
                    )
                }
            </ol>
        </div>
    </S.Additional>
);

export default Additional;