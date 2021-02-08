import PropTypes from 'prop-types';
import Years from './years';
import Movies from './movies';

const ByYear = ({ selectedYear = -1 }) => (
    <>
        <Years selectedYear={selectedYear} />
        {selectedYear && <Movies selectedYear={selectedYear} />}
    </>
);

ByYear.propTypes = {
    selectedYear: PropTypes.PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ]),
};

export default ByYear;