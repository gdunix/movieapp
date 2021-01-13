import Poster, { PosterWithRating } from './poster';
import PosterList from './Posters';

const Posters = PosterList(Poster);

const PostersWithRating = PosterList(PosterWithRating);

export { Posters, PostersWithRating };
