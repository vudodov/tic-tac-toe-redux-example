import immutable from 'immutable';

const {List, Map} = immutable;

const INITIAL_STATE = Map({
  history: List([ 
    Map({
      squares: List([
        null, null, null,
        null, null, null,
        null, null, null
      ]),
  })]),
  stepNumber: 0,
  xIsNext: true,
  winner: false
});

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares.get(a) && squares.get(a) === squares.get(b) && squares.get(a) === squares.get(c)) {
      return squares.get(a);
    }
  }
  return null;
}

// reducing functions
function performMove(state, boxIndex){
  const history = state.get('history');
  const current = history.last();
  let squares = current.get('squares');
  let winner = state.get('winner');

  if(winner || squares.get(boxIndex)) {
    return state;
  }

  squares = squares.set(boxIndex, state.get('xIsNext') ? 'X' : 'O');

  winner = calculateWinner(squares);

  return state
    .set('history', state
      .get('history')
      .push(Map({ squares: squares }))
    )
    .set('stepNumber', history.size)
    .set('xIsNext', !state.get('xIsNext'))
    .set('winner', winner);
}

function jumpToStep(state, step){
  return state
    .set('history', state.get('history').take(step + 1))
    .set('stepNumber', step)
    .set('xIsNext', (step % 2) === 0)
    .set('winner', false);
}

function reset(state){
  return state
    .set('history', state.get('history').take(1))
    .set('stepNumber', 0)
    .set('xIsNext', true)
    .set('winner', false);
}

// ====================
export default function ticTacToeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'PERFORM_MOVE':
    return performMove(state, action.boxIndex);

  case 'JUMP_TO_STEP':
    return jumpToStep(state, action.step);

  case 'RESET':
    return reset(state);
  }

  return state;
}
