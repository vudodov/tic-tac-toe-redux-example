import { createStore } from 'redux';
import server from './src/server.js';
import reducer from './src/reducer.js';

const store = createStore(reducer);
server.startServer(store);