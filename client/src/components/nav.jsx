import React from 'react';
const Nav = ({inGame, name, createGame, joinGame}) => {
  if (inGame) {
    return (
      <div className="nav">
        <div>
          Name: {name}
        </div>
      </div>
    )
  }
  return (
    <div className="nav">
      <div>
        Name:
        <input className="name-input" type="text" />
      </div>
      <div className="nav-button" onClick={createGame}>
        Create Game
      </div>
      <div className="nav-button" onClick={joinGame}>
        Join Game
      </div>
    </div>
  )
}
export default Nav;