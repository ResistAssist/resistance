let Game = require('./model.js');
let player = require('./player.js');
let game;

module.exports = {
  initialization: function(playerArray, merlinBool, emitterCallbacks) {
    game = new Game(playerArray, merlinBool, emitterCallbacks);
    game.setUpGameState();
    game.emitInitialization(game.allPlayers, game.leader, game.missionBoard, game.missionNumber, game.turnNumber, game.allThumbsVotes, game.missionParticipantCount, game.currentParticipantCount);
  },



}