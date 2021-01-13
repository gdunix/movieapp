import MainInfo from './mainInfo';
import Additional from './additional';
import Quotes from './quotes';

const Movie = ({ movie }) => (
    <>
        <MainInfo {...movie} />
        <Additional {...movie} />
        <Quotes {...movie} />
    </>
);

export default Movie;