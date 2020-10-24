import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import App from './features/app';

import './index.css';

const socket = io('http://localhost:8090');
socket.on('state-change', (state) =>
  ReactDOM.render(
    <App dispatch={(action) => socket.emit('action', action)} state={state} />,
    document.getElementById('root'),
  ),
);
