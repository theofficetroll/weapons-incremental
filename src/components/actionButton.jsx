import React from 'react';

// This will handle clickable buttons
// This is a stub

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
