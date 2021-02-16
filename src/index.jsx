import React from 'react';
import ReactDOM from 'react-dom';
import Combat from './components/combat';
import Wielder from './components/wielder';
import Weapon from './components/weapon';
import Map from './components/map';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    switch (command) {
      case 'test':
        console.log('test');
        break;
      default:
        console.log('no specific command');
        break;
    }
  }

  render() {
    return (
      <div className="game">
        <Combat />
        <Wielder />
        <Weapon />
        <Map />
      </div>
    )
  }
};

ReactDOM.render(<Container />, document.getElementById('Container'));
