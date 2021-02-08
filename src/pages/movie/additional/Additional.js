import PropTypes from 'prop-types';
import * as S from './styled';

const Actor = ({ index = -1, name, character }) => (
    <li key={index}>
        <span>{name}</span> ({character})
    </li>
);

Actor.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
};

const Additional = ({ actors = [], genres }) => (
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

Additional.propTypes = {
    actors: PropTypes.array,
    genres: PropTypes.array,
};

export default Additional;