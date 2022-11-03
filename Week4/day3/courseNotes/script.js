let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]

const newParty = party.filter(party.desert.includes("Apple"));
console.log(newParty);
//const reducer = (accumulator, currentValue) => accumulator + currentValue;
