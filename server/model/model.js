const _ = require('lodash');
const PlayerInstance = require('./player');

class GameInstance {
  constructor(playerArray, merlinBool) {
    this.playerArray = playerArray;
    this.playerCount = playerArray.length;
    this.leader = Math.floor(Math.random() * playerCount);
    this.merlinBool = merlinBool;
    this.allPlayers = [];
    this.missionParticipantCount;
    this.missionFourFailCount;
    this.playerRoles;
    this.missionBoard = [null, null, null, null, null];

    this.missionNumber = 1;
    this.turnNumber = 1;
    this.participantsSelected = false;
    this.thumbsVotes;
    // thumbs up thumbs down votes total

    //emit functions
    this.emitIntialization;
  }

  setUpGameState(cb1) {
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
    this.emitIntialization = cb1;
    this.emitIntialization(this.allPlayers, this.leader, this.missionBoard, this.missionNumber, this.turnNumber);
  }

  incrementLeader() {
    this.leader += 1;
    if (this.leader === this.playerCount) {
      this.leader = 0;
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


  handleThumbsVotesBoard(arrayOfVotes) {
    let voteCount = 0;
    arrayOfVotes.forEach(num => {
      if (num === 1) {
        voteCount += 1;
      } else {
        voteCount -= 1;
      }
    })
    if (voteCount > 0) {
      handleMissionVotes()
    } else {

    }
  }

  handleMissionVotes() {

  }

  handleMissionOutcome(isSuccesful) {
    
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

// let aGame = new GameInstance(playerArray, true);
module.exports = GameInstance;
