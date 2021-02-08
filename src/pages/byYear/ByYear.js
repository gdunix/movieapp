import PropTypes from 'prop-types';
import Years from './years';
import Movies from './movies';

const ByYear = ({ selectedYear }) => (
    <>
        <Years selectedYear={selectedYear} />
        {selectedYear && <Movies selectedYear={selectedYear} />}
    </>
);

ByYear.propTypes = {
    selectedYear: PropTypes.string.isRequired,
};

export default ByYear;