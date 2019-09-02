/* eslint-disable */
const express = require('express');
const path = require('path');

const app = express();

// Since the root/src dir contains our index.html
app.use(express.static(__dirname + '/dist/'));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname +'/dist/index.html'));
});

const port = process.env.PORT || 9000
app.listen(port);

console.log('App is listening on port ' + port);