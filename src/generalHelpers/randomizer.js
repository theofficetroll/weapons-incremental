const randomNumber = (min, max) => {
  let result = Math.floor(Math.random() * (max - min) + min);
  return result;
}

export default randomNumber;
