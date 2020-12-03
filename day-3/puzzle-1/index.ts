import fs from 'fs'
const path = require('path');

const firstPuzzle = (
  input: (('.' | '#')[])[],
  slope: {
    right: number,
    down: number,
  }
) => {
  const map: ('.' | '#' | 'O' | 'X')[][] = [...input]
  let treesEncountered = 0;

//   |
//   |
//   |
// Z |
//   |
//   |
//   |_________________
//           X

  const currentPosition = {
    xCoordinate: 0,
    zCoordinate: 0,
  }

  const isThereATree = (coordinate: string): boolean => {
    if (coordinate === '#') return true;
    return false;
  }

  for (let index = 0; index < map.length; index++) {
    const row = [
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
      ...map[index],
    ];
    if (index === currentPosition.zCoordinate) {
      if (isThereATree(row[currentPosition.xCoordinate])) {
        treesEncountered++;
        row[currentPosition.xCoordinate] = 'X'
      } else {
        row[currentPosition.xCoordinate] = 'O'
      }
      currentPosition.zCoordinate += slope.down;
      currentPosition.xCoordinate += slope.right;      
    }
    map[index] = row;
  }

  fs.writeFileSync(
    path.join(__dirname,'./output'), 
    map.map(r => r.join('')).join('\n')
  )

  return treesEncountered;
}


export default firstPuzzle;