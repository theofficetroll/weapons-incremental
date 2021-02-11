import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
    // this.anyMethod = this.anyMethod.bind(this)
  }

  componentDidMount() {
    // anything to run after first render
  }

  render() {
    return (
      <div>
        Modules:
        Combat
        Wielder Character Sheet
        Weapon Character Sheet
        Map
      </div>
    )
  }
};

ReactDOM.render(<Container />, document.getElementById('Container'));
