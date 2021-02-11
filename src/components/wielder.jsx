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
      <div>
        Name: {this.props.name}
        Strength: {this.props.strength}
        Hit Points: {this.props.hp}
        Accuracy: {this.props.accuracy}
        Damage: {this.props.damage}
        Speed: {this.props.speed}
        Level: {this.props.level}
      </div>
    )
  }
}

export default Wielder;
