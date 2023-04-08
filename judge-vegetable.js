const judgeVegetable = function (vegetables, metric) {
  let highest = 0;
  let submitter = 0;

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highest) {
      submitter = i;
      highest = vegetables[i][metric];
    }
  }

  return vegetables[submitter].submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 12,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));