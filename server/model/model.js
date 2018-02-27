const _ = require('lodash');
const PlayerInstance = require('./player');

class GameInstance {
  constructor(playerArray, merlinBool) {
    this.playerArray = playerArray;
    this.playerCount = playerArray.length;
    this.merlinBool = merlinBool;
    this.allPlayers = [];
    this.missionParticipantCount;
    this.missionFourFailCount;
    this.playerRoles;
    this.missionSuccess = [null, null, null, null, null];

    this.participantsSelected = false;
    this.thumbsVotes;
    this.missionNumber = 1;
    this.turnNumber = 1;
    // thumbs up thumbs down votes total
  }

  setUpGameState() {
    if (this.playerCount === 5) {
      this.participantCount = [2, 3, 2, 3, 3];
      this.missionFourFailCount = 1;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'assa', 'mer', 'res', 'res']);
        this.setRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'res', 'res', 'res']);
        this.setRoles();
      }
    } else if (this.playerCount === 6) {
      this.participantCount = [2, 3, 4, 3, 4];
      this.missionFourFailCount = 1;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'assa', 'mer', 'res', 'res', 'res']);
        this.setRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'res', 'res', 'res', 'res']);
        this.setRoles();
      }
    } else if (this.playerCount === 7) {
      this.participantCount = [2, 3, 3, 4, 4];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'assa', 'mer', 'res', 'res', 'res']);
        this.setRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'res', 'res', 'res', 'res']);
        this.setRoles();
      }
    } else if (this.playerCount = 8) {
      this.participantCount = [3, 4, 4, 5, 5];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'assa', 'mer', 'res', 'res', 'res', 'res']);
        this.setRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'res', 'res', 'res', 'res', 'res']);
        this.setRoles();
      }
    } else if (this.playerCount = 9) {
      this.participantCount = [3, 4, 4, 5, 5];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'assa', 'mer', 'res', 'res', 'res', 'res', 'res']);
        this.setRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'res', 'res', 'res', 'res', 'res', 'res']);
        this.setRoles();
      }
    } else if (this.playerCount = 10) {
      this.participantCount = [3, 4, 4, 5, 5];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'assa', 'mer', 'res', 'res', 'res', 'res', 'res']);
        this.setRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'spy', 'res', 'res', 'res', 'res', 'res', 'res']);
        this.setRoles();
      }
    }

  }

  setRoles() {
    this.playerArray.map((player, i) => {
      let playerId = player.socketId.toString();
      let newPlayer = new PlayerInstance(playerId, player.name, this.playerRoles[i])
      this.allPlayers.push(newPlayer);
    });

    console.log(this.allPlayers);
  }


  setThumbsVotes() {

  }

  // setMissionSuccess() {
  //   if (handleMissionSuccess) {
  //     this.missionSuccess[this.turn - 1] = 1;
  //   } else {
  //     this.missionSuccess[this.turn - 1] = 0;
  //   }
  // }

  handleMissionSuccess() {
    
  }

}

let playerArray = [
  {
    name: 'Louis',
    socketId: 516243,
  },
  {
    name: 'Yunus',
    socketId: 516244,
  },
  {
    name: 'Zhen',
    socketId: 516245,
  },
  {
    name: 'Mike',
    socketId: 516246,
  },
  {
    name: 'Wyatt',
    socketId: 516247,
  }
]

let aGame = new GameInstance(playerArray, true);
aGame.setUpGameState();

// let merlinBool = true;

// [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
// ]

// arguments for the callback: true or false for each index