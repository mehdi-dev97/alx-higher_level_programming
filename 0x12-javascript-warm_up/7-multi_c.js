#!/usr/bin/node

const argv = process.argv;
const numberOfCount = parseInt(argv[2]);
if (!isNaN(numberOfCount)) {
    let i = 0;
    while (i < numberOfCount) {
        console.log('C is fun');
        i++;
    }
} else {
    console.log('Missing number of occurrences');
}
