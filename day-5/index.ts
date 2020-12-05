import input from './input';

import firstPuzzle from './puzzle-1';
import secondPuzzle from './puzzle-2';

const planeSeatRow = [...Array(8).keys()];
const planeSeatMap = [...Array.from({length: 128}, () => planeSeatRow)]

console.log('Output of the first puzzle is: ', firstPuzzle(
  input,
  planeSeatMap
))


console.log('Output of the second puzzle is: ', secondPuzzle())