import PropTypes from 'prop-types';

import ReactStars from 'react-star-ratings';

const Rating = ({ grade, starDimension, starSpacing, starEmptyColor, starRatedColor }) =>
    <ReactStars
        name="grade"
        numberOfStars={5}
        rating={grade}
        starDimension={starDimension}
        starSpacing={starSpacing}
        starEmptyColor={starEmptyColor}
        starRatedColor={starRatedColor} />;

Rating.propTypes = {
    grade: PropTypes.number,
    starDimension: PropTypes.string,
    starSpacing: PropTypes.string,
    starEmptyColor: PropTypes.string,
    starRatedColor: PropTypes.string,
};

Rating.defaultProps = {
    grade: 0,
    starDimension: "25px",
    starSpacing: "2px",
    starEmptyColor: "#aaa",
    starRatedColor: "#d02b1f"
};

export default Rating;