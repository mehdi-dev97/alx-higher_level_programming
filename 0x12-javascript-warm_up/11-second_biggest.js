#!/usr/bin/node

const argv = process.argv;
if (argv.length > 4) {
  const args = argv.map(Number)
    .slice(2, argv.length)
    .sort((a, b) => a - b);
  console.log(args.length - 2);
} else {
  console.log(0);
}
