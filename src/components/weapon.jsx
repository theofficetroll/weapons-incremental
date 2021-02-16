import React from 'react';

// This is the character sheet for the weapon
// Shows current stats of weapon
// Includes action which player may activate. This may move elsewhere later
// Shows available upgrades on skill tree
// If sufficient xp, can click on upgrades to buy them

// Currently stateless, but this may change
// For now leaving as a stateful component

class Weapon extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="weapon">
        <div className="stats">
          Willpower: {this.props.willpower}
          MP: {this.props.mp}
        </div>
        <br />
        <div className="actions">
          Puissance - This needs to be a clickable button with a cooldown
        </div>
        <br />
        <div className="upgrades">
          Skill Tree!
        </div>
      </div>
    )
  }
}

export default Weapon;
