const firstPuzzle = (
  input: string[]
) => {
  const bagsThatCanContainAShinyGoldBag = input.filter(
    r => r.indexOf('shiny gold') > -1
  ).map(
    r => r.split('bag')[0].trim()
  ).filter(
    r => r.indexOf('shiny gold') === -1
  );

  for (let index = 0; index < bagsThatCanContainAShinyGoldBag.length; index++) {
    const bagName = bagsThatCanContainAShinyGoldBag[index];
    
    const bagsThatCanContainBagName = input.map(luggageRule => {
      const [
        parentBag,
        containsString
      ] = luggageRule.split('contain');

      if (containsString.indexOf(bagName) > -1) return parentBag.split('bag')[0].trim();
    }).filter(r => r !== undefined) as string[]

    bagsThatCanContainAShinyGoldBag.push(...bagsThatCanContainBagName);
  }

  return [...new Set(bagsThatCanContainAShinyGoldBag)].length;
}


export default firstPuzzle;
