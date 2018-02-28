import React from 'react';
const Player = ({id, name}) => {
  return (
    <div id={'player-' + id} className="player-container">
      <div className="player-name">
        {name}
      </div>
      <div className="player-circle"></div>
    </div>
  )
}
export default Player;