// This will hold main & helper functions to generate new characters
// This will function the same for wielders and opponents

const newCharacter = (oldWielder, level) => {
  // if existing character is humanoid
    // use monster race pool
    // TODO add map location/ level modifiers once those are implemented
    // choose random race
  // else
    // use humanoid race pool
    // TODO add map location/ level modifiers once those are implemented
    // choose random race
  // choose class from loaded race
  // apply both race and class modifiers to get base stats
  // level up character using characterLeveler
  // return new character
}

// The below will be moved out to data store later
// just here temporarily for ease of access

// TODO nameBucket will need to be replaced with a name generator function
// For now, just putting some random names from an array

const humanoidRaces = [
  {
    race: 'human',
    raceType: 'humanoid',
    classes: [
      'fighter',
    ],
    levelZeroStats: {
      accuracy: 1,
      damageBonus: 0,
      defense: 0,
      hp: 10,
      speed: 20,
    },
    levelModifiers: {
      //
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
      damageBonus: 0,
      defense: 0,
      hp: 10,
      speed: 20,
    },
    levelModifiers: {
      //
    },
    nameBucket: ['Bob'],
  }
];