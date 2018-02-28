import React from 'react';
import {render} from 'react-dom';
import io from 'socket.io-client';
import Nav from './components/nav.jsx';
import Game from './components/game.jsx';
import History from './components/history.jsx';
import $ from 'jquery';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inGame: false,
      name: '',
      players: ['bubba', 'yubby', 'bukkitofpoop', 'potatochop', 'stegasaurus', 'gorbulo', 'bonquisha', 'fappy'],
      isSpy: false,
      isMerlin: false
    }
    this.createGame = this.createGame.bind(this);
    this.joinGame = this.joinGame.bind(this);
  }
  createGame() {
    var $name = $('.name-input');
    if($name.val().match(/^[A-Za-z]+$/)) {
      this.setState({inGame: true, name: $name.val()});
      console.log('valid name, creating game');
    } else {
      console.log('not valid letters-only name');
    }
  }
  joinGame() {
    var $name = $('.name-input');
    if($name.val().match(/^[A-Za-z]+$/)) {
      this.setState({inGame: true, name: $name.val()});
      console.log('valid name, joining game');
    } else {
      console.log('not valid letters-only name');
    }
  }
  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="header">
            RESISTANCE
          </div>
          <Nav inGame={this.state.inGame} name={this.state.name} createGame={this.createGame} joinGame={this.joinGame} />
          <Game players={this.state.players} isSpy={this.state.isSpy} />
          <History />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

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