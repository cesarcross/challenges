// list of threats
const threats = [
  {
    dangerLevel: 'Gold',
    monsterName: 'Azure',
  },
  {
    dangerLevel: 'Silver',
    monsterName: 'Brown',
  },
  {
    dangerLevel: 'Copper',
    monsterName: 'Colour',
  },
  {
    dangerLevel: 'Wood',
    monsterName: 'Disc',
  },
];

// list of heroes
const heroes = [
  {
    rank: 'S',
    name: 'Spiderman',
  },
  {
    rank: 'A',
    name: 'Aquaman',
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

// ==========================================================================

const random = (el) => el[Math.floor(Math.random() * 4)];

const pickedThreat = random(threats);
const pickedHero = random(heroes);

// ==========================================================================

// retired heroes
const retiredHeroes = [];
// battle log
const battleLog = [];

// ==========================================================================

// battle logic
const battle = (threat, hero) => {
  retiredHeroes.push(hero);

  // >>>>>>>>>> SUBSTITUIR abaixo por removeHero <<<<<<<<<<
  const index = heroes.indexOf(hero);
  heroes.splice(index, 1);

  if (threat.dangerLevel === 'Gold' && hero.rank === 'S') {
    return `${hero.name} Won!`;
  }

  return `${hero.name} was defeated`;
};

// const battleResult = battle(pickedThreat, pickedHero);

// ==========================================================================

const addBattleLog = (currentBattle) => {
  battleLog.push(currentBattle);
};

// addBattleLog(battleResult);

// ==========================================================================

// hero creation

let tempInput = {
  rank: 'S',
  name: 'Link',
};

const createHero = (state) => {
  heroes.push(state);
};

// createHero(tempInput);

// ==========================================================================

const removeHero = (hero) => {
  const index = heroes.indexOf(hero);
  heroes.splice(index, 1);
};

const selectedHero = heroes[2];

removeHero(selectedHero);

// ==========================================================================

console.log(heroes);
// console.log(battleLog);
