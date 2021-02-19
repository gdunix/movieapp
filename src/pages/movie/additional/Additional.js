import PropTypes from 'prop-types';
import * as S from './styled';

const Additional = ({ actors = [], genres }) => (
    <S.Additional>
        <div>
            <h3>Actors</h3>
            <ol>
                {
                    actors && actors.map(({name, character}, index) =>(
                        <li key={index}>
                            <span>{name}</span> {character && (<span>({character})</span>)}
                        </li>
                        )
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