const secondPuzzle = (
  input: string[]
) => {
  const bagsDirectlyInAShinyGoldBag = input.filter(
    r => r.split('contain')[0].indexOf('shiny gold') > -1
  ).map(
    r => r.split('contain')[1].trim().split('.')[0].split(', ').map(r => r.split('bag')[0].trim())
  ).flat();

  const bagsInAShinyGoldBag = bagsDirectlyInAShinyGoldBag.map((r: string) =>{
    const quantity = r.trim().split(' ')[0];
    const bagName = r.trim().split(`${quantity} `)[1];
          
    return [...Array.from({length: quantity}, () => bagName)]    
  }).flat()
  
  for (let index = 0; index < bagsInAShinyGoldBag.length; index++) {
    const bagName = bagsInAShinyGoldBag[index].trim()
    
    const bagsThatCanContainBagName = input.map(luggageRule => {
      const [
        parentBag,
        containsString
      ] = luggageRule.split('contain');

      if (bagName === parentBag.split(' bag')[0].trim()) {
        return containsString.split(', ').map((r: string) =>{
          if (r === 'no other bags') return [];
          const bag = r.split(' bag')[0]

          const quantity = bag.trim().split(' ')[0];
          const bagName = bag.trim().split(`${quantity} `)[1];
          return [...Array.from({ length: quantity}, () => bagName)]    
        }).flat()
      }
    }).filter(r => r !== undefined) as string[][]

    bagsInAShinyGoldBag.push(...bagsThatCanContainBagName.flat());
  }

  return bagsInAShinyGoldBag.length;
}

export default secondPuzzle;