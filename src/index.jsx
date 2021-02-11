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
    // this.anyMethod = this.anyMethod.bind(this)
  }

  componentDidMount() {
    // anything to run after first render
  }

  render() {
    return (
      <div>
        <Combat />
        <Wielder />
        <Weapon />
        <Map />
      </div>
    )
  }
};

ReactDOM.render(<Container />, document.getElementById('Container'));
