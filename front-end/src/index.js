import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import { Game } from './features/tic-tac-toe';

import './index.css';

const socket = io('http://localhost:8090');
socket.on('state-change', (state) =>
  ReactDOM.render(
    <Game dispatch={(action) => socket.emit('action', action)} gameState={state} />,
    document.getElementById('root'),
  ),
);
