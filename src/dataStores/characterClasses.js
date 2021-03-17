// TODO
// Consider if I want to turn this into a JSON or something else

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

export default classes;
