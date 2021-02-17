import React from 'react';
import Action from './actionButton.jsx';

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

  // TODO
  // The Action will need to be mapped once implemented
  render () {
    const { willpower, willpowerMax, title, active } = this.props.weapon;
    return (
      <div className="weapon">
        <div className="stats">
          Willpower: {willpower} / {willpowerMax}
          <br />
          <br />
          Title: {title}
          <br />
        </div>
        <br />
        <div className="actions">
          <Action action={active}/>
        </div>
        <div className="passives">
          Passive?
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
