export const threats = [
  {
    dangerLevel: 'Gold',
    monsterName: 'Eldrich Horror',
  },
  {
    dangerLevel: 'Silver',
    monsterName: 'IT the Clown',
  },
  {
    dangerLevel: 'Copper',
    monsterName: 'Corrupted Human',
  },
  {
    dangerLevel: 'Wood',
    monsterName: 'Giant Octopus',
  },
];

// list of heroes
export const heroes = [
  {
    rank: 'S',
    name: 'Spiderman',
  },
  {
    rank: 'A',
    name: 'Super Metroid',
  },
  {
    rank: 'B',
    name: 'Batman',
  },
  {
    rank: 'C',
    name: 'Catwoman',
  },
];

export const heroRanks = ['S', 'A', 'B', 'C'];

// ----------------------------------------------------

export const random = (el) => el[Math.floor(Math.random() * 4)];

export const pickedThreat = () => random(threats);

export const pickedHero = random(heroes);

// ----------------------------------------------------

export const battle = (dangerLevel, hero) => {
  if (
    (dangerLevel === 'Gold' && hero.rank === 'S') ||
    (dangerLevel === 'Silver' && hero.rank === 'A') ||
    (dangerLevel === 'Copper' && hero.rank === 'B') ||
    (dangerLevel === 'Wood' && hero.rank === 'C')
  ) {
    return `${hero.name} Won!`;
  }

  return `${hero.name} was defeated`;
};
