const _ = require('lodash');
const PlayerInstance = require('./player');

class GameInstance {
  constructor(playerArray, merlinBool, emitterCallbacks) {
    // Track essential variables regarding game state here
    this.playerCount = playerArray.length;
    this.playerArray = playerArray;
    this.leader = Math.floor(Math.random() * this.playerCount);
    this.isMerlinPlaying = merlinBool;
    this.allPlayers = [];
    this.missionParticipantCount;
    this.missionFourFailCount;
    this.playerRoles;
    this.missionBoard = [null, null, null, null, null];
    this.missionNumber = 0;
    this.turnNumber = 0;
    this.allThumbsVotes = [];
    this.currentParticipantCount = 2;

    // game phase/flow tracking bools go here
    this.isInitialization = true;
    this.isRevelation = false;
    this.isStartOfTurn = false;
    this.isTeamPicked = false;
    this.isMissionStart = false;
    this.isMissionEnd = false;

    // emit functions/callbacks
    this.emitInitialization = emitterCallbacks.emitInitialization;
    this.emitTurnStart = emitterCallbacks.emitTurnStart;
    this.emitParticipants = emitterCallbacks.emitParticipants;
    this.emitMissionStart = emitterCallbacks.emitMissionStart;
    this.emitResultMissionVote = emitterCallbacks.emitResultMissionVote;
  }

  // this function controls the flow of the game determining what phase the players should be playing
  handleGamePhaseSelection() {
    
  }






  // functions to run when initializing the game. Should need to be run just once.
  setUpGameState() {
    if (this.playerCount === 5) {
      this.missionParticipantCount = [2, 3, 2, 3, 3];
      this.missionFourFailCount = 1;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'assa', 'mer', 'res', 'res']);
        this.setUpRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'res', 'res', 'res']);
        this.setUpRoles();
      }
    } else if (this.playerCount === 6) {
      this.missionParticipantCount = [2, 3, 4, 3, 4];
      this.missionFourFailCount = 1;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'assa', 'mer', 'res', 'res', 'res']);
        this.setUpRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'res', 'res', 'res', 'res']);
        this.setUpRoles();
      }
    } else if (this.playerCount === 7) {
      this.missionParticipantCount = [2, 3, 3, 4, 4];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'assa', 'mer', 'res', 'res', 'res']);
        this.setUpRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'res', 'res', 'res', 'res']);
        this.setUpRoles();
      }
    } else if (this.playerCount = 8) {
      this.missionParticipantCount = [3, 4, 4, 5, 5];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'assa', 'mer', 'res', 'res', 'res', 'res']);
        this.setUpRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'res', 'res', 'res', 'res', 'res']);
        this.setUpRoles();
      }
    } else if (this.playerCount = 9) {
      this.missionParticipantCount = [3, 4, 4, 5, 5];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'assa', 'mer', 'res', 'res', 'res', 'res', 'res']);
        this.setUpRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'res', 'res', 'res', 'res', 'res', 'res']);
        this.setUpRoles();
      }
    } else if (this.playerCount = 10) {
      this.missionParticipantCount = [3, 4, 4, 5, 5];
      this.missionFourFailCount = 2;
      if (this.merlinBool) {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'assa', 'mer', 'res', 'res', 'res', 'res', 'res']);
        this.setUpRoles();
      } else {
        this.playerRoles = _.shuffle(['spy', 'spy', 'spy', 'spy', 'res', 'res', 'res', 'res', 'res', 'res']);
        this.setUpRoles();
      }
    }
    
  }

  setUpRoles() {
    console.log('the player name array', this.playerArray);
    console.log('the team leader', this.leader);
    let isRes, isMer, isSpy, isAssa;

    this.playerArray.map((player, i) => {
      if (this.playerRoles[i] === 'res') {
        isRes = true;
        isMer = false;
        isSpy = false;
        isAssa = false;
      } else if (this.playerRoles[i] === 'mer') {
        isRes = true;
        isMer = true;
        isSpy = false;
        isAssa = false;
      } else if (this.playerRoles[i] === 'spy') {
        isRes = false;
        isMer = false;
        isSpy = true;
        isAssa = false;
      } else if (this.playerRoles[i] === 'assa') {
        isRes = false;
        isMer = false;
        isSpy = true;
        isAssa = true;
      }
      let newPlayer = new PlayerInstance(player, isRes, isMer, isSpy, isAssa)
      this.allPlayers.push(newPlayer);
    });

    console.log('These are all the players with roles: ', this.allPlayers);
    this.setUpAllThumbsVotesArray();
  }

  setUpAllThumbsVotesArray() {
    let len = this.playerCount.valueOf();
    for (var i = 0; i < 5; i += 1) {
      let tempArray = [];
      for (var j = 0; j < len; j += 1) {
        tempArray.push(null);
      }
      this.allThumbsVotes.push(tempArray);
    }

    //console.log('this is the state of the thumbs votes: ', this.allThumbsVotes);

    //this.emitIntialization(this.allPlayers, this.leader, this.missionBoard, this.missionNumber, this.turnNumber, this.allThumbsVotes, this.missionParticipantCount, this.currentParticipantCount);
  }






  // functions to update the state of the game that DO NOT directly talk to the controller
  handleIncrementLeader() {
    this.leader += 1;
    if (this.leader === this.playerCount) {
      this.leader = 0;
    }
  }

  handleIncrementMissionNumber() {
    this.missionNumber += 1;
  }

  handleChangeTurnNumber(resetBool) {
    this.turnNumber += 1;
    if (this.turnNumer === 5) {
      // handleGameOutcome(false);
    }
  }

  handleMissionBoardUpdate(bool) {
    if (bool) {
      this.missionBoard[this.missionNumber] = 1;
    } else {
      this.missionBoard[this.missionNumber] = 0;
    }
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
      // handleMissionVotes()
    } else {

    }
  }






  handleThumbsVoteCollection() {

  }

  handleMissionVotes() {

  }

  handleMissionOutcome(isSuccesful) {
    
  }

  handleGameOutcome(bool) {
    if (bool) {
      // TODO: resistance wins
    } else {
      // TODO: spies win
    }
  }



  // emit game state info (with callbacks) back to controller
  emitIntialization() {

  }

  emitTurnStart(missionNumber, turnNumber, leader) {

  }

  emitMissionParticipants() {

  }

  emitThumbsVote() {

  }

  emitMissionOutcome() {

  }

}

//let playerArray = ['Louis', 'Yunus', 'Wyatt', 'Zhen', 'Mike']

//let aGame = new GameInstance(playerArray, true);
//aGame.setUpGameState();

module.exports = GameInstance;
//module.exports = aGame;





//below is an example of a callback to pass info to the players. Unusued.
//aGame.allPlayers[0].getMissionStatusValues(aGame.missionNumber);