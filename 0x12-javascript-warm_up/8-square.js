#!/usr/bin/node

const argv = process.argv;
const sizeOfSquare = parseInt(argv[2]);
if (!isNaN(sizeOfSquare)) {
  for (let x = 0; x < sizeOfSquare; x++) {
    for (let y = 0; y < sizeOfSquare; y++) {
      process.stdout.write('X');
    }
    console.log('');
  }
} else {
  console.log('Missing size');
}
