// This will hold main & helper functions to generate new characters
// This will function the same for wielders and opponents

// TODO
// Create general random number function and replace throughout

const newCharacter = (oldWielder, level) => {

  // choose race
  if (oldWielder.raceType === 'humanoid') {
    // TODO
    // Add map location/ level modifiers once those are implemented
    // Add race variation? If certain races never fight one another &c
    // Add chance of non-monster races
    let newRaceData = monsterRaces[Math.floor(Math.random() * monsterRaces.length)];
  } else {
    // TODO
    // Add map location/ level modifiers once those are implemented
    // Add race variation? If certain races never fight one another &c
    // Add chance of monster races
    let newRaceData = humanoidRaces[Math.floor(Math.random() * humanoidRaces.length)];
  }

  // TODO choose name
  let characterName = null;

  // choose class
  // TODO currently just pulling first class
  let newClassData = newRaceData.classes[0];

  // apply new data to create level 0 character
  let characterData = {
    accuracy: newRaceData.accuracy + newClassData.accuracy,
    charClass: newClassData.name,
    damageBonus: newRaceData.damageBonus + newClassData.damageBonus,
    defense: newRaceData.defense + newClassData.defense,
    hp: newRaceData.hp + newClassData.hp,
    level: 0,
    name: characterName,
    race: newRaceData.race,
    raceType: newRaceData.raceType,
    speed: newRaceData.speed + newClassData.speed,
    xp: 0,
  }

  // TODO apply both race and class modifiers to get base stats


  // TODO level up character using characterLeveler


  return characterData;
};

// The below will be moved out to data store later
// just here temporarily for ease of access

// TODO nameBucket will need to be replaced with a name generator function
// For now, just putting some random names from an array

// Thought on balance:
// 5 points to spread between acc, db, def, hp, & spd
// hp = 5 per point, starts with 5
// This will all have to adjust once I decide how accuracy and speed work

// Thoughts on probability
// Do I want to make certain classes more common in a race?
// How do I want to handle this?
// Could just put more instances of that class in the array
// Or could create an object which includes a key/ value pair for each class
//  thus including race and weight/ probability
// For now, just going to list which classes are possible

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

const classes = {
  fighter: {
    name: 'fighter',
    levelZeroStats: {
      accuracy: 1,
      damageBonus: 1,
      defense: 1,
      hp: 5,
      speed: 1,
    },
    levelModifiers: {
      // TODO Add modifiers to apply each level
    },
    skills: {
      // TODO Add class-specific skills
    },
  },
  wizard: {
    name: 'wizard',
    levelZeroStats: {
      accuracy: 1,
      damageBonus: 1,
      defense: 1,
      hp: 0,
      speed: 2,
    },
    levelModifiers: {
      // TODO Add modifiers to apply each level
    },
    skills: {
      // TODO Add class-specific skills
    },
  },
};
