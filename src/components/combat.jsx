import React from 'react';
import ProgressBar from './progressBar.jsx';

// This handles the combat screen for the game
// Will show wielder and opponent
// This will contain all timing?

class Combat extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="combat">
        Combat Panel
        <br />
        <ProgressBar bgcolor='#6a1b9a' completed='10' />
      </div>
    )
  }
}

export default Combat;
