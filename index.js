const express = require('express');

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});
console.log("Hello, Stimato! 'sup?");

const app = express();

app.use(express.static("public"));

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));