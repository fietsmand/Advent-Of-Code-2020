
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

const isHex = (h: string) => {
  if (h.indexOf('#') === 0) {
    const a = parseInt(h.split('#')[1],16);
    return (a.toString(16) === h.split('#')[1])
  }

  return false;
}


const validatePassword = (password: { 
  key: string;
  value: string;
}) => {
  let validPassword = false;
  switch (password.key as keyof Passport) {
    case 'byr':
      if (password.value.length === 4 
        && parseInt(password.value) >= 1920 
        && parseInt(password.value) <= 2020 
      ) validPassword = true;
      break;
    case 'iyr':
      if (password.value.length === 4 
        && parseInt(password.value) >= 2010 
        && parseInt(password.value) <= 2020 
      ) validPassword = true;
      break;
    case 'eyr':
      if (password.value.length === 4 
        && parseInt(password.value) >= 2020 
        && parseInt(password.value) <= 2030 
      ) validPassword = true;
      break;
    case 'hgt':
      if (
        (password.value.indexOf('cm') > -1 && parseInt(password.value.split('cm')[0]) >= 150 && parseInt(password.value.split('cm')[0]) <= 193) ||
        (password.value.indexOf('in') > -1 && parseInt(password.value.split('in')[0]) >= 59 && parseInt(password.value.split('in')[0]) <= 76) 
      ) validPassword = true;
      break;
    case 'hcl':
      if (isHex(password.value)) validPassword = true;
      break;
    case 'ecl':
      if ([
        'amb',
        'blu',
        'brn',
        'gry',
        'grn',
        'hzl',
        'oth',
      ].includes(password.value) ) validPassword = true;
      break;
    case 'pid':
      if (password.value.length === 9 && password.value.split('').every(r => !isNaN(parseInt(r)))) validPassword = true;
      break;
    case 'cid':
      validPassword = true;
      break;
    default:
      break;
  }
  
  return validPassword;
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
      if (!validatePassword({ key: passwordName, value: passport[passwordName as keyof Passport] as string})) valid = false;
    })

    if (valid) validPassports += 1;
  }


  return validPassports;
}


export default firstPuzzle;