import _ from 'lodash';

class GameInstance {
  constructor(playerArray, merlinBool) {
    this.playerArray = playerArray;
    this.playerCount = playerArray.length;
    // thumbs up thumbs down votes total
    this.missionParticipantCount;
    this.missionFourFailCount;
    this.merlinBool = merlinBool;
    this.thumbsVotes;
    this.missionSuccess = [null, null, null, null, null];
    this.missionNumber = 1;
    this.turnNumber = 1;
    this.playerRoles;
  }

  setUpGameState() {
    if (this.playerCount === 5) {
      this.participantCount = [2, 3, 2, 3, 3];
      this.missionFourFailCount = 1;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'assa', 'mer', 'res', 'res']);
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'res', 'res', 'res']);
      }
    } else if (this.playerCount === 6) {
      this.participantCount = [2, 3, 4, 3, 4];
      this.missionFourFailCount = 1;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'assa', 'mer', 'res', 'res', 'res']);
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'res', 'res', 'res', 'res']);
      }
    } else if (this.playerCount === 7) {
      this.participantCount = [2, 3, 3, 4, 4];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'assa', 'mer', 'res', 'res', 'res']);
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'res', 'res', 'res', 'res']);
      }
    } else if (this.playerCount = 8) {
      this.participantCount = [3, 4, 4, 5, 5];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'assa', 'mer', 'res', 'res', 'res', 'res']);
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'res', 'res', 'res', 'res', 'res']);
      }
    } else if (this.playerCount = 9) {
      this.participantCount = [3, 4, 4, 5, 5];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'assa', 'mer', 'res', 'res', 'res', 'res', 'res']);
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'res', 'res', 'res', 'res', 'res', 'res']);
      }
    } else if (this.playerCount = 10) {
      this.participantCount = [3, 4, 4, 5, 5];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'assa', 'mer', 'res', 'res', 'res', 'res', 'res']);
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'spy', 'res', 'res', 'res', 'res', 'res', 'res']);
      }
    }

  }

  setRoles(socketId) {
    this.playerArray.map((player, i) => {
      let player.socketId.toString() = new PlayerInstance(player.socketId, player.name, playerRoles[i])
      this.allPlayers.push(i);
    })

    }


  setThumbsVotes() {

  }

  setMissionSuccess() {
    if (handleMissionSuccess) {
      this.missionSuccess[this.turn - 1] = 1;
    } else {
      this.missionSuccess[this.turn - 1] = 0;
    }
  }

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

let merlinBool = true;

// [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
// ]

// arguments for the callback: true or false for each index