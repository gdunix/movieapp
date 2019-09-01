import { withProps } from 'recompose';

import Poster, { PosterWithRating } from './poster';
import PosterList from './Posters';

const Posters = withProps({
    Poster
})(PosterList);

const PostersWithRating = withProps({
    Poster: PosterWithRating
})(PosterList);

export { Posters, PostersWithRating };
