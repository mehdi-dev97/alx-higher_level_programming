#!/usr/bin/node

const argv = process.argv;
const num = parseInt(argv[2]);
console.log(!isNaN(num) ? 'My number: ' + num : 'Not a number');
