#!/usr/bin/node

const fs = require('fs');
const argv = process.argv;

fs.readFile(argv[2], 'utf8', function (error, content) {
    console.log(error || content);
});