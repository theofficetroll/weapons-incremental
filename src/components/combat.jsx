import React, { useState, useEffect } from 'react';
import ProgressBar from './progressBar.jsx';

// This handles the combat screen for the game
// Will show wielder and opponent

// TODO
// Need to fix CSS, conflicting with index.css

const Combat = (props) => {
  const { wielder, opponent, weapon } = props;

  const [ wielderCompleted, setWielderCompleted, opponentCompleted, setOpponentCompleted ] = useState(0);

  // Set interval based on an assumed value of speed range 0-99
  const [ wielderInterval ] = useState((100 - wielder.speed) * 10);
  const [ opponentInterval ] = useState((100 - opponent.speed) * 10);

  const combatStyles = {
    textAlign: 'center',
    width: '50%',
  }

  const wielderCombatStyles = {
    textAlign: 'left',
    width: '50%',
  }

  const opponentCombatStyles = {
    textAlign: 'left',
    width: '50%',
  }

  // Wielder progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setWielderCompleted(oldValue => {
        let newValue = oldValue + 10;

        if (newValue > 100) {
          // Trigger attack

          // Reset value to 0
          newValue = 0;
        }
        return newValue;
      });
    }, wielderInterval);
  }, []);

  // // Opponent progress bar
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setOpponentCompleted(oldValue => {
  //       let newValue = oldValue + 10;

  //       if (newValue > 100) {
  //         // Trigger attack

  //         // Reset value to 0
  //         newValue = 0;
  //       }
  //       return newValue;
  //     });
  //   }, opponentInterval);
  // }, []);

  return (
    <div style={combatStyles} className="combat-panel">
      Combat Panel
      <br />
      <div style={wielderCombatStyles} className="wielder-combat-panel">
        Wielder Progress Bar:
        <ProgressBar bgcolor={"#6a1b9a"} completed={wielderCompleted} />
      </div>
      {/* <div style={opponentCombatStyles} className="opponent-combat-panel">
        Opponent Progress Bar:
        <ProgressBar bgcolor={"#6a1b9a"} completed={opponentCompleted} />
      </div> */}
    </div>
  );
}

export default Combat;
