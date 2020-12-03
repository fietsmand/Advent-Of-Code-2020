import input from './input';

import firstPuzzle from './puzzle-1';
import secondPuzzle from './puzzle-2';


console.log('Output of the first puzzle is: ', firstPuzzle(
  input as ("." | "#")[][],
  {
    right: 3,
    down: 1
  }
))


console.log('Output of the second puzzle is: ', secondPuzzle(
  input as ("." | "#")[][],
  [
    {
      right: 1,
      down: 1
    },
    {
      right: 3,
      down: 1
    },
    {
      right: 5,
      down: 1
    },
    {
      right: 7,
      down: 1
    },
    {
      right: 1,
      down: 2
    },
  ]
))