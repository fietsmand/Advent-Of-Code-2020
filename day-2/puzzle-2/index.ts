interface Input {
  [passwordPolicy: string]: string;
}

const firstPuzzle = (
  input: Input[]
): number => {
  let validPasswords: number = 0;

  input.map(passwordObject => {
    const passwordPolicy = Object.keys(passwordObject)[0];
    const password = passwordObject[passwordPolicy];

    const [positions, passwordShouldContain] = passwordPolicy.split(' ');
    const [firstPosition, secondPosition] = positions.split('-');

    const passwordInPieces = password.split('');

    const firstPositionIsTrue = passwordInPieces[parseInt(firstPosition) - 1] === passwordShouldContain 
    const secondPositionIsTrue = passwordInPieces[parseInt(secondPosition) - 1] === passwordShouldContain 

    if((firstPositionIsTrue || secondPositionIsTrue )&& 
        firstPositionIsTrue !== secondPositionIsTrue
      ) {
        validPasswords += 1;
      }
  })

  return validPasswords;
}


export default firstPuzzle;