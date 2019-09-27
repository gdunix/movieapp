/* eslint-disable */
const express = require('express');
const path = require('path');

const app = express();

app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

app.use(express.static(__dirname + '/dist/'));

app.get('/*', (_, res) => res.sendFile(path.join(__dirname + '/dist/index.html')));

const port = process.env.PORT || 9000
app.listen(port);

console.log('App is listening on port ' + port);