const dieTypes = {
  d3: 3,
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d20: 20,
  d100: 100,
};

const times = x => (f, ...args) => {
  if (x > 0) {
    return times(x - 1)(f, args) + f(args);
  }
  return 0;
};

const rollDie = dieType => Math.floor(Math.random() * dieTypes[dieType]) + 1;

const rollDice = (count, dieType, modifier) => times(count)(rollDie, dieType) + modifier;

export { dieTypes, rollDice };
