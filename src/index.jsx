import React from 'react';
import ReactDOM from 'react-dom';
import ls from 'local-storage';
import './index.css';

// components
import Combat from './components/combat.jsx';
import Wielder from './components/wielder.jsx';
import Opponent from './components/opponent.jsx';
import Weapon from './components/weapon.jsx';
import Map from './components/map.jsx';
import commandRouter from './actions/commandRouter.js';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'waiting',
      wielder: {
        accuracy: 1,
        charClass: 'fighter',
        damageBonus: 0,
        defense: 0,
        hp: 10,
        level: 0,
        name: 'Bob',
        race: 'human',
        speed: 20,
        xp: 0,
      },
      opponent: {
        accuracy: 1,
        charClass: 'fighter',
        damageBonus: 1,
        defense: 0,
        hp: 10,
        name: 'Gnash',
        level: 0,
        race: 'goblin',
        speed: 1,
        xp: 0,
      },
      weapon: {
        accuracyBonus: 0,
        active: ['Puissance'],
        damage: 1,
        passive: [],
        title: '',
        willpower: 10,
        willpowerMax: 10,
        xp: 0,
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.saveProgress = this.saveProgress.bind(this);
    this.loadProgress = this.loadProgress.bind(this);
  }

  // This may not be needed, may only need handleAction
  handleClick = (e) => {
    e.preventDefault();
    let command = e.target.value;
    commandRouter(command);
  };

  handleAction = (command) => {
    commandRouter(command);
  }

  // This is a stub
  // If I end up using just the main state, I can have it just save the whole thing
  // Otherwise, I'll want to save individually in each place the state changes
  saveProgress = (key, value) => {
    ls.set(key, value);
  };

  loadProgress = (key) => {
    ls.get(key);
  };

  render() {
    return (
      <div className="game">
        <Combat wielder={this.state.wielder} opponent={this.state.opponent} handleAction={this.handleAction} weapon={this.state.weapon} />
        <Wielder wielder={this.state.wielder} />
        <Opponent opponent={this.state.opponent} />
        <Weapon weapon={this.state.weapon} />
        <Map />
      </div>
    )
  }
};

ReactDOM.render(<Container />, document.getElementById('app'));
