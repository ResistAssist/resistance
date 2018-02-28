let model = require('./model.js');
let player = require('./player.js');
let game;

module.exports = {
  initialization: function(playerArray, merlinBool) {
    game = new model(playerArray, merlinBool);
  }

  emitIntialization: function (cb1) {
    game.setUpGameState(cb1); 
  }

  thumbsVotes: function (cb2) {
    player.handleThumbsVote(cb2);
  }
}