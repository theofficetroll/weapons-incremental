import React from 'react';
import ReactDOM from 'react-dom';
import ls from 'local-storage';

// components
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
    this.saveProgress = this.saveProgress.bind(this);
    this.loadProgress = this.loadProgress.bind(this);
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

  // This is a stub
  // If I end up using just the main state, I can have it just save the whole thing
  // Otherwise, I'll want to save individually in each place the state changes
  saveProgress = (key, value) => {
    ls.set(key, value);
  }

  loadProgress = (key) => {
    ls.get(key);
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
