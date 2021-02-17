import React from 'react';

// This is the stat sheet for the Wielder
// Typically just static data showing
// With later updates, may include interactable items if the weapon has certain skills

class Wielder extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    const { name, race, charClass, damageBonus, hp, accuracy, speed, level, xp } = this.props.wielder;
    return (
      <div className="wielder">
        Name: {name}
        <br />
        Race: {race}
        <br />
        Class: {charClass}
        <br />
        Strength: {damageBonus}
        <br />
        Hit Points: {hp}
        <br />
        Accuracy: {accuracy}
        <br />
        Speed: {speed}
        <br />
        Level: {level}
        <br />
        Experience: {xp}
        <br />
      </div>
    )
  }
}

export default Wielder;
