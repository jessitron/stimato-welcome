process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});
console.log("Hello, Stimato!");