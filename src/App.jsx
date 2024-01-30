import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementRandom, decrementRandom, resetGame, makeGuess } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const { randomNumber, userGuess, message } = useSelector((state) => state);

  return (
    <div>
      <h1>Redux Game</h1>
      {/* <p>Загаданное число: {randomNumber}</p> */}
      <input
        type="number"
        value={userGuess || ''}
        onChange={(e) => dispatch(makeGuess(e.target.value))}
      />
      <button onClick={() => console.log(dispatch(incrementRandom()))}>+RND</button>
      <button onClick={() => console.log(dispatch(decrementRandom()))}>-RND</button>
      <button onClick={() => dispatch(resetGame())}>Заново</button>
      <p>{message}</p>
    </div>
  );
};

export default App;