export const incrementRandom = () => ({
    type: 'INCREMENT_RANDOM',
    payload: Math.floor(Math.random() * 51),
  });
  
  export const decrementRandom = () => ({
    type: 'DECREMENT_RANDOM',
    payload: Math.floor(Math.random() * 51),
  });
  
  export const resetGame = () => ({
    type: 'RESET_GAME',
  });
  
  export const makeGuess = (guess) => ({
    type: 'MAKE_GUESS',
    payload: guess,
  });