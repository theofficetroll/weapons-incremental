import React, { useState, useEffect } from 'react';
import ProgressBar from './progressBar.jsx';

// This handles the combat screen for the game
// Will show wielder and opponent
// This will contain all timing?

function Combat() {
  const [completed, setCompleted] = useState(0);

  const combatStyles = {
    textAlign: 'center',
    width: '50%',
  }

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 1000);
  }, []);

  return (
    <div style={combatStyles} className="Combat">
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    </div>
  );
}


// const Combat = props => {
//   // const { wielder, opponent, weapon } = props;

//   const [ wielderProgress, opponentProgress ] = useState(0);



//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateValue(oldValue => {
//         const newValue = oldValue + 10;

//         if (newValue === 100) {
//           // Trigger attack
//           // Then reset interval
//           clearInterval(interval);
//         }
//         return newValue;
//       });
//     }, 1000);
//   }, []);

//   return (
//     <div className="combat">
//       Combat Panel
//       <br />
//       Wielder Progress Bar:
//       <ProgressBar bgcolor='#6a1b9a' completed={completed} />
//     </div>
//   )
// }

export default Combat;
