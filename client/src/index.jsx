import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (<div>THIS IS REACT</div>);

ReactDOM.render(<App />, document.getElementById('app'));

/*
MIKE REFERENCE THIS TO TALK TO SOCKETS
https://socket.io/docs/client-api/

EXAMPLE
var socket = io.connect();
  socket.on('boardState', function (data) {
    [{},{},{}]
  });
  socket.emit('voteResult' , {
    yesOrNo: true
  });

*/