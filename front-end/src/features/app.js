import React from 'react';
import { Game } from './tic-tac-toe';

export default function App(props) {
  const dispatch = props.dispatch;
  const state = props.state;

  return (
    <div>
      <Game dispatch={dispatch} gameState={state.ticTacToeReducer} />,
    </div>
  );
}
