const commandRouter = (command) => {

  let { action, accuracy, accuracyBonus, attacker, damage, damageBonus, defense, hp } = command;

  let fullDamage, newHp;

  // Note on usage
  // All commands should be an object
  // All command objects should include a key of action
  //  action is a string which points to what action should be taken
  // Each specific action will need support key/ value pairs which will be used to build function
  // That function will be returned and executed by index.jsx

  switch (action) {
    case 'test':
      console.log('test');
      break;
    case 'attack':
      // TODO Calculate chance to hit
      fullDamage = damage + damageBonus - defense;
      newHp = hp - ((fullDamage >= 0) ? fullDamage : 0)
      console.log(`${attacker} attacks for ${fullDamage} damage!`);
      // TODO Return object to update state
      break;
    default:
      console.log('no specific command');
      break;
  }
}

export default commandRouter;
