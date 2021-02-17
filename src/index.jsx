import React from 'react';
import ReactDOM from 'react-dom';
import ls from 'local-storage';
import './index.css';

// components
import Combat from './components/combat.jsx';
import Wielder from './components/wielder.jsx';
import Weapon from './components/weapon.jsx';
import Map from './components/map.jsx';
import actionRouter from './actions/commandRouter.js';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'waiting',
      wielder: {
        xp: 0,
        level: 0,
        speed: 1,
        accuracy: 1,
        hp: 10,
        damageBonus: 0,
        name: 'Bob',
        race: "human",
        class: "fighter",
      },
      opponent: {
        xp: 0,
        level: 0,
        speed: 1,
        hp: 10,
        damageBonus: 0,
        name: 'Gnash',
        race: "goblin",
        clasS: "fighter",
      },
      weapon: {
        xp: 0,
        willpower: 10,
        willpowerMax: 10,
        active: ["Puissance"],
        passive: [],
        title: '',
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.saveProgress = this.saveProgress.bind(this);
    this.loadProgress = this.loadProgress.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    let action = e.target.value;
    actionRouter(action);
  };

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
        <Combat wielder={this.state.wielder} opponent={this.state.opponent} weapon={this.state.weapon} />
        <Wielder wielder={this.state.wielder} />
        <Weapon weapon={this.state.weapon} />
        <Map />
      </div>
    )
  }
};

ReactDOM.render(<Container />, document.getElementById('app'));
