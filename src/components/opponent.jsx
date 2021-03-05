import React from 'react';

// This is the stat sheet for the Opponent
// This data will not be visible to player in most cases
// Only for dev at this point

class Opponent extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    const { name, race, charClass, damageBonus, hp, accuracy, speed, level, xp } = this.props.opponent;
    return (
      <div className="opponent">
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

export default Opponent;
