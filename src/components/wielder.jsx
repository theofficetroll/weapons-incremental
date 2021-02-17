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
        Name: {this.props.name}
        Race: {this.props.race}
        Class: {this.props.class}
        Strength: {this.props.damageBonus}
        Hit Points: {this.props.hp}
        Accuracy: {this.props.accuracy}
        Speed: {this.props.speed}
        Level: {this.props.level}
        Experience: {this.props.xp}
      </div>
    )
  }
}

export default Wielder;
