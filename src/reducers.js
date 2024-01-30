const initialState = {
    randomNumber:  Math.floor(Math.random() * 101),
    userGuess: null,
    message: '',
  };
  
  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_RANDOM':
        return { ...state, randomNumber: state.randomNumber + action.payload };
      case 'DECREMENT_RANDOM':
        return { ...state, randomNumber: state.randomNumber - action.payload };
      case 'RESET_GAME':
        return { ...initialState, randomNumber: Math.floor(Math.random() * 101) };
      case 'MAKE_GUESS':
        const { randomNumber } = state;
        const userGuess = parseInt(action.payload, 10);
  
        if (userGuess === randomNumber) {
          return { ...state, userGuess, message: 'Поздравляем, вы отгадали число!' };
        } else if (userGuess < randomNumber) {
          return { ...state, userGuess, message: 'Не правильно, берите выше' };
        } else {
          return { ...state, userGuess, message: 'Не правильно, берите ниже' };
        }
      default:
        return state;
    }
  };
  
  export default gameReducer;