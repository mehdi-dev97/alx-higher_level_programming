#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let numberOccurences = 0;
  for (const nbr of list) {
    if (nbr === searchElement) {
      numberOccurences += 1;
    }
  }
  return numberOccurences;
};
