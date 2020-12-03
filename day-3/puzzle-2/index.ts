const extendArray = (array: any[], amount: number): any[] => {
  const returnedArray = [...array];
  for (let index = 0; index < amount; index++) {
    returnedArray.push(...array);
  }

  return returnedArray;
}

const secondPuzzle = (
  input: (('.' | '#')[])[],
  slopes: {
    right: number,
    down: number,
  }[]
) => {
  const map: ('.' | '#' | 'O' | 'X')[][] = [...input]
  const amountOfEncounteredTrees = slopes.map((slope) => {
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
        ...extendArray(map[index], 1000),
      ];
      if (index === currentPosition.zCoordinate) {
        if (isThereATree(row[currentPosition.xCoordinate])) treesEncountered++;
        currentPosition.zCoordinate += slope.down;
        currentPosition.xCoordinate += slope.right;      
      }
    }

    return treesEncountered;
  })

  return amountOfEncounteredTrees.reduce((p, n) => p * n)
}


export default secondPuzzle;