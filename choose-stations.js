const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const votingStations = [];
  let number = 0;

  for (const station of stations) {
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      votingStations[number] = station[0];
      number++;
    }
  }

  return votingStations;
}

console.log(chooseStations(stations));
