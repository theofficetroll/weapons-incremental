const actionRouter = (action) => {

  switch (action) {
    case 'test':
      console.log('test');
      break;
    default:
      console.log('no specific command');
      break;
  }
}

export default actionRouter;