const firstPuzzle = (
  input: number[]
) => {
  const adapters = [...input];

  const seatChargerJoltage = 0;
  const minJoltageMargin = 3;
  const deviceBuiltInJoltageAdapterRating = Math.max(...adapters) + 3;

  let currentJoltage = seatChargerJoltage;
  const joltageDifferences: {[i: number]: number} = {

  };

  while (currentJoltage < deviceBuiltInJoltageAdapterRating) {
    const foundAdapter = adapters.sort((a,b) => a-b).find(r => r > currentJoltage && r <= currentJoltage + minJoltageMargin)
    if (!foundAdapter) {
      const difference = deviceBuiltInJoltageAdapterRating - currentJoltage
      joltageDifferences[difference] = joltageDifferences[difference] ? joltageDifferences[difference] + 1 : 1;

      break;
    };
    const difference = foundAdapter - currentJoltage
    joltageDifferences[difference] = joltageDifferences[difference] ? joltageDifferences[difference] + 1 : 1;

    console.log(`${currentJoltage} + ${foundAdapter}`);
    adapters.splice(adapters.indexOf(foundAdapter), 1)
    currentJoltage = foundAdapter;
  }

  return joltageDifferences[1] * joltageDifferences[3] 
}


export default firstPuzzle;