import React from 'react';
import $ from 'jquery'
import Player from './player.jsx';
class Game extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    for (var i = 0; i < this.props.players.length; i++) {
      var theta = ((Math.PI * 2) / this.props.players.length);
      var angle = (theta * i);
      var $player = $('#player-' + i);
      $player.css({top: 230 + (100 * Math.sin(angle)), left: 380 + (100 * Math.cos(angle))});
    }
  }
  // componentDidUpdate() {

  // }
  render() {
    return (
      <div className="game">
        {this.props.players.map((player, i) => <Player name={player} id={i} key={i} />)}
      </div>
    );
  }
}
export default Game;