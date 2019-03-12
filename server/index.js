const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../build')))
    .use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });

const port = process.env.PORT || 8000;

const server = app.listen(port, function() {
    console.log('Supply Tag Creator', server.address());
});
server.timeout = 1000 * 60 * 10; // 10 minutes