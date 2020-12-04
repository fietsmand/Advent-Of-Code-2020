
type Passport = {
  byr: string;
  iyr: string;
  eyr: string;
  hgt: string;
  hcl: string;
  ecl: string;
  pid: string;
  cid?: string;
}

const firstPuzzle = (
  input: string[]
): number => {
  let validPassports = 0;
  
  for (let index = 0; index < input.length; index++) {
    let valid = true;
    const passport: Passport = {
      byr: '',
      iyr: '',
      eyr: '',
      hgt: '',
      hcl: '',
      ecl: '',
      pid: '',
    }
    const passportSequence = input[index];
    passportSequence.replace(/(?:\r\n|\r|\n)/g, ' ').split(' ').forEach((password) => {
      const [key, value] = password.split(':');
      passport[key as keyof Passport] = value;
    })

    Object.keys(passport).map((passwordName) => {
      if (passwordName !== 'cid' && passport[passwordName as keyof Passport] === '') valid = false;
    })

    if (valid) validPassports += 1;
  }


  return validPassports;
}


export default firstPuzzle;