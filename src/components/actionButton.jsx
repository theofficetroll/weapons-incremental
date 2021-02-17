import React from 'react';

// This handles the combat screen for the game
// Will show wielder and opponent
// This will contain all timing?

class actionButton extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      //
    }
  }

  render () {
    return (
      <div className="button action">
        {this.props.action}
      </div>
    )
  }
}

export default actionButton;
