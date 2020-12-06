const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const firstPuzzle = (
  input: string[]
) => {
  let amountOfQuestionAnsweredWithYes = 0;

  for (let index = 0; index < input.length; index++) {
    const groupAnswers = input[index];

    const uniqueAnswers = [...new Set(groupAnswers.replace(/(?:\r\n|\r|\n)/g, '').split(''))];
    
    amountOfQuestionAnsweredWithYes += uniqueAnswers.filter(r => alphabet.indexOf(r) >= 0).length
  }

  return amountOfQuestionAnsweredWithYes
}


export default firstPuzzle;