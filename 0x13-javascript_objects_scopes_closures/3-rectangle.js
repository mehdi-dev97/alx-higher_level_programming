#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.with = w;
      this.height = h;
    }
  }

  print () {
    for (let x = 0; x < this.height; x++) {
      for (let y = 0; y < this.with; y++) {
        process.stdout.write('X');
      }
      console.log('');
    }
  }
};
