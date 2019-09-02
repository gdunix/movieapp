import withPageLayout from 'hocs/withPageLayout';

import Movies from './movies';

export default withPageLayout({ title: 'Latest Seen' })(Movies);