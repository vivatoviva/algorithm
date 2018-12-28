const denom = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1];

const getPayed = (owed) => {
  const payed = [];
  let have = owed;
  for (const d of denom) {
    while (have >= d) {
      have -= d;
      payed.push(d);
    }
  }
  return payed;
};

console.log(getPayed(10134));
