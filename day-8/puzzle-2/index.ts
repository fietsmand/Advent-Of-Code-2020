const secondPuzzle = (
  input: string[]
) => {
  let programTerminated = false;

  for (let lastChangedOperationIndex = 0; !programTerminated; ) {
    const programOperations = [...input];
    
    const [lastChangedOperation, lastChangedArgument] = programOperations[lastChangedOperationIndex].split(' ')
    switch (lastChangedOperation) {
      case 'nop':
        programOperations[lastChangedOperationIndex] = `jmp ${lastChangedArgument}`
        break;
      case 'jmp':
        programOperations[lastChangedOperationIndex] = `nop ${lastChangedArgument}`
        break;
      case 'acc':
        lastChangedOperationIndex += 1;
        continue;
      default:
        break;
    }
    
    let accumulator = 0
    let encounteredSameStepTwice = false;
    const operationsAlreadyDone: number[] = [];

    for (let operationIndex = 0; !encounteredSameStepTwice; ) {
      if (programOperations[operationIndex] === undefined) {
        programTerminated = true;
        return accumulator
      }
      
      const [operation, argument] = programOperations[operationIndex].split(' ');

      if (operationsAlreadyDone.includes(operationIndex)) {
        encounteredSameStepTwice = true
        lastChangedOperationIndex += 1
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
}

export default secondPuzzle;