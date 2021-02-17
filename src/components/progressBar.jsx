import React from 'react';

const ProgressBar = (props) => {
  const {bgcolor, completed } = props;
  return (
    <progress className='progress-bar' value={completed} max='100' />
  )
}

export default ProgressBar;
