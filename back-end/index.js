import redux from 'redux';
import server from './src/server.js';
import reducer from './src/reducer.js';

const store = redux.createStore(reducer);
server.startServer(store);