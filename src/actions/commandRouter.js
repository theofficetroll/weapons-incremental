const actionRouter = (action) => {

  switch (action) {
    case 'test':
      console.log('test');
      break;
    case 'wielderAttack':
      console.log('wielder attacks');
      break;
    case 'opponentAttack':
      console.log('opponent attacks');
      break;
    default:
      console.log('no specific command');
      break;
  }
}

export default actionRouter;