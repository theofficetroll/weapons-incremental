import React from 'react';

// This is the stat sheet for the Wielder
// Typically just static data showing
// With later updates, may include interactable items if the weapon has certain skills

class Wielder extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="wielder">
        Name: {this.props.wielder.name}
        <br />
        Race: {this.props.wielder.race}
        <br />
        Class: {this.props.wielder.class}
        <br />
        Strength: {this.props.wielder.damageBonus}
        <br />
        Hit Points: {this.props.wielder.hp}
        <br />
        Accuracy: {this.props.wielder.accuracy}
        <br />
        Speed: {this.props.wielder.speed}
        <br />
        Level: {this.props.wielder.level}
        <br />
        Experience: {this.props.wielder.xp}
        <br />
      </div>
    )
  }
}

export default Wielder;
