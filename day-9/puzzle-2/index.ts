const findContiguousSet = (targetNumber: number, list: number[]): number[] | void => {
  for (let startIndex = 0; startIndex < list.length; startIndex++) {
    const contiguousSet = [list[startIndex]]
    for (let itemIndex = startIndex + 1; itemIndex < list.length; itemIndex++) {
      const nextItem = list[itemIndex];
      contiguousSet.push(nextItem);
      if (contiguousSet.reduce((a, b) => a + b, 0) === targetNumber) return contiguousSet
    }
  };
}


const secondPuzzle = (
 input: number[],
 preambleLenght: number,
) => {
  const preamble = input.slice(0, preambleLenght);
  const followingNumbers = input.slice(preambleLenght, input.length);  
  
  for (let index = 0; index < followingNumbers.length; index++) {
    const number = followingNumbers[index];
    const numbersSummedFromPreamble = preamble.map(r => {
      return preamble.slice(1).map(t => t + r)
    }).flat();

    preamble.shift()
    preamble.push(number)

    if (!numbersSummedFromPreamble.includes(number)) {
      return Math.min(...findContiguousSet(number, input)) + Math.max(...findContiguousSet(number, input))
    }
  }
}

export default secondPuzzle;