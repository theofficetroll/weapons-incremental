// TODO
// Consider if I want to change this to JSON or something else
// Add more categories of races
// Replace nameBucket with an actual function or call to a function elsewhere
// Balance
// Decide how to make certain classes more common for a race

const humanoidRaces = [
  {
    race: 'human',
    raceType: 'humanoid',
    classes: [
      'fighter',
      'wizard',
    ],
    levelZeroStats: {
      accuracy: 3,
      damageBonus: 0,
      defense: 0,
      hp: 10,
      speed: 2,
    },
    levelModifiers: {
      // TODO Add modifiers to apply each level
    },
    nameBucket: ['Bob'],
  }
];

const monsterRaces = [
  {
    race: 'goblin',
    raceType: 'monster',
    classes: [
      'fighter',
    ],
    levelZeroStats: {
      accuracy: 1,
      damageBonus: 1,
      defense: 1,
      hp: 5,
      speed: 2,
    },
    levelModifiers: {
      // TODO Add modifiers to apply each level
    },
    nameBucket: ['Bob'],
  }
];

export default {
  humanoidRaces,
  monsterRaces
};
