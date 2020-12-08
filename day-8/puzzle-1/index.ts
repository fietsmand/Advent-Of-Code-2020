const firstPuzzle = (
  input: string[]
) => {

  let accumulator = 0
  let encounteredSameStepTwice = false;
  const operationsAlreadyDone: number[] = [];

  for (let operationIndex = 0; !encounteredSameStepTwice; ) {
    const [operation, argument] = input[operationIndex].split(' ');
    
    if (operationsAlreadyDone.includes(operationIndex)) {
      encounteredSameStepTwice = true
      return accumulator
    }

    operationsAlreadyDone.push(operationIndex)

    switch (operation) {
      case 'nop':
        operationIndex += 1;
        break;
      case 'acc':
        accumulator = eval(`${accumulator}${argument}`);
        operationIndex += 1;
        break;
      case 'jmp':
        operationIndex = eval(`${operationIndex}${argument}`)
        break;
      default:
        break;
    }
  }
}


export default firstPuzzle;