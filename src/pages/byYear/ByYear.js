import Years from './years';
import Movies from './movies';

const ByYear = ({ selectedYear }) => (
    <>
        <Years selectedYear={selectedYear} />
        {selectedYear && <Movies selectedYear={selectedYear} />}
    </>
);

export default ByYear;