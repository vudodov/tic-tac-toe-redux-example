import Server from 'socket.io';

export default {
  startServer: function (store) {
    console.log('Let the Game begin');

    const io = new Server().attach(8090);

    store.subscribe(() => io.emit('state-change', store.getState()));

    io.on('connection', (socket) => {
      console.log('New Connection');

      socket.emit('state-change', store.getState());
      socket.on('action', store.dispatch.bind(store));
    });
  },
};
