const firstPuzzle = (
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

    if (!numbersSummedFromPreamble.includes(number)) return number;
  }
}


export default firstPuzzle;