const secondPuzzle = (
  input: string[],
  planeSeatMap: number[][]
) => {
  const isFront = (character: 'F' | 'B'): 0 | 1 => (character === 'F') ? 1 : 0;
  const isLeftSide = (character: 'R' | 'L'): 0 | 1 => (character === 'L') ? 1 : 0;
  
  const whatRowAmIOn = (rows: string) => {
    let amountOfRows = [0, planeSeatMap.length]
    for (let index = 0; index < rows.length; index++) {
      const element = rows[index] as 'F' | 'B';
      amountOfRows[isFront(element)] = amountOfRows[1] - ((amountOfRows[1] - amountOfRows[0]) / 2)
    }

    return amountOfRows[0];
  }

  const whatSeatAmIOn = (row: string) => {
    let amountOfSeats = [0, planeSeatMap[0].length]
    for (let index = 0; index < row.length; index++) {
      const element = row[index] as 'L' | 'R';
      amountOfSeats[isLeftSide(element)] = amountOfSeats[1] - ((amountOfSeats[1] - amountOfSeats[0]) / 2)
    }

    return amountOfSeats[0];
  }
  
  
  const seatIDs = input.map(r => {
    const rows = r.substring(0, 7);
    const seat = r.substring(7);
    const seatID = (whatRowAmIOn(rows) * 8) + whatSeatAmIOn(seat);    
    return seatID;
  });

  return seatIDs.filter(
    seat => !(seatIDs.indexOf(seat + 1) > -1 && seatIDs.indexOf(seat - 1) > -1)
  ).filter(
    seat => (seatIDs.indexOf(seat + 2) > -1 && seatIDs.indexOf(seat - 2) > -1)
  ).reduce((a, b): number | string => a + 2 === b ? a + 1 : 'Cannot find seat');
}

export default secondPuzzle;