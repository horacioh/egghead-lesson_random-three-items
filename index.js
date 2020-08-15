const items = [
  "Nader", "John", "Rich", "Sean", "Dan", "Kyle"
];

function getRandom3(items) {
  return [...items]
    .sort(() => Math.random() > 0.5 ? 1 : -1)
    .slice(0, 3)
}

console.log(getRandom3(items))
