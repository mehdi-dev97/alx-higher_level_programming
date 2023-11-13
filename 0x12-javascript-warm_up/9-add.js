#!/usr/bin/node

const argv = process.argv;
function add (a, b) {
  if (!isNaN(a) || !isNaN(b)) {
    console.log(a + b);
  } else {
    console.log(NaN);
  }
}
add(parseInt(argv[2]), parseInt(argv[3]));
