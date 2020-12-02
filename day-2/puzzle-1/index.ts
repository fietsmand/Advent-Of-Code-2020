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

    const [minMax, passwordShouldContain] = passwordPolicy.split(' ');
    const [minimumAppearances, maximumAppearances] = minMax.split('-');

    const passwordInPieces = password.split('');
    const appearances = passwordInPieces.filter(letter => letter === passwordShouldContain).length;
    if(appearances >= parseInt(minimumAppearances) && appearances <= parseInt(maximumAppearances)) validPasswords += 1;
  })


  return validPasswords;
}


export default firstPuzzle;