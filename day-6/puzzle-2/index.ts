const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const secondPuzzle = (
  input: string[]
) => {
  let amountOfQuestionAnsweredWithYes = 0;
  
  for (let index = 0; index < input.length; index++) {
    const groupAnswers = input[index].split(/(?:\r\n|\r|\n)/g).filter(r => r !== '');
  
    const allUniqueQuestionsInGroup = [...new Set(groupAnswers.join(''))]

    allUniqueQuestionsInGroup.forEach(question => {
      const hasQuestionBeenAnsweredByAllInGroup = groupAnswers.every(personsAnswers => personsAnswers.indexOf(question) > -1);

      if (hasQuestionBeenAnsweredByAllInGroup) amountOfQuestionAnsweredWithYes += 1
    })
  }
  
  return amountOfQuestionAnsweredWithYes
}

export default secondPuzzle;
