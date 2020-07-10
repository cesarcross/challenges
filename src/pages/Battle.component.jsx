import React, { useState } from 'react';
import './Battle.styles.css';

import { heroes, pickedThreat, battle, random, heroRanks } from '../data/data';

const Battle = () => {
  // const [pickThreat, setPickThreat] = useState('');
  const [pickHero, setPickHero] = useState('');
  const [fight, setFight] = useState('');
  const [battleLog, setBattleLog] = useState([]);
  const [allHerores, setAllHeroes] = useState(heroes);
  const [newHeroName, setNewHeroName] = useState('');
  const [randomThreat, setRandomThreat] = useState(pickedThreat());

  // const [dangerLevel, monsterName] = Object.values(pickedThreat);
  const { dangerLevel, monsterName } = randomThreat;

  console.log(battleLog);

  return (
    <div>
      <h2>Selecione o Heroi para combater a ameaça</h2>
      <div className="group-list">
        <ul>
          <h3>AMEAÇA</h3>
          <li>
            Danger Level: {dangerLevel} --- Name: {monsterName}
          </li>
        </ul>
        <ul>
          <h3>HEROIS</h3>
          {allHerores.map((hero, index) => (
            <li key={index} onClick={() => setPickHero(hero)}>
              Name: {hero.name} --- Rank: {hero.rank}
            </li>
          ))}
          {pickHero ? <p>Chosen hero: {pickHero.name}</p> : ''}
        </ul>
      </div>

      <button
        className="threat-btn"
        onClick={() => setRandomThreat(pickedThreat())}
      >
        Identificar Ameaça
      </button>

      {pickHero ? (
        <button
          className="battle-btn"
          onClick={() => setFight(battle(dangerLevel, pickHero))}
        >
          BATTLE!
        </button>
      ) : (
        ''
      )}

      {/* ---------------------------------------------- */}

      <div className="heroCreate">
        <input
          className="heroNameInput"
          type="text"
          placeholder="Name your Hero"
          onChange={(e) => setNewHeroName([e.target.value])}
        />

        <button
          className="heroCreateButton"
          onClick={() =>
            setAllHeroes([
              ...allHerores,
              {
                rank: random(heroRanks),
                name: `${newHeroName}`,
              },
            ])
          }
        >
          Create Hero
        </button>
      </div>

      {fight ? <p className="result">Result: {fight}</p> : ''}

      {fight ? (
        <button
          className="battleLog"
          onClick={() => setBattleLog([...battleLog, fight])}
        >
          Add to battleLog
        </button>
      ) : (
        ''
      )}

      {battleLog.map((logItem, index) => (
        <p className="logItem" key={index}>
          {logItem}
        </p>
      ))}
    </div>
  );
};

export default Battle;
