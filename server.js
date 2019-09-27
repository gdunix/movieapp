/* eslint-disable */
const express = require('express');

const app = express();

app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

app.use(express.static(__dirname + '/dist/'));

const port = process.env.PORT || 9000
app.listen(port);

console.log('App is listening on port ' + port);