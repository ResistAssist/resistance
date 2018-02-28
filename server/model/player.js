class PlayerInstance {
  constructor(socketId, playerName, role, playerCount) {
    this.socketId = socketId;
    this.playerName = playerName;
    this.role = role;

    this.missionParticipant = false;
    this.thumbsVotes = [
      [null, null, null, null, null],
      [null, null, null, null, null], 
      [null, null, null, null, null], 
      [null, null, null, null, null], 
      [null, null, null, null, null]
    ];
    this.missionVote;
  }

  handleThumbsVotePlayer(cb2) {
    
  }
}


module.exports = PlayerInstance;









// let playerArray = [
//   {
//     name: 'Louis',
//     merlin: false,
//     spy: true,
//     socketId: 12315161,
//   },
//   {
//     name: 'Yunus',
//     merlin: false,
//     spy: true,
//     socketId: 12315161,
//   },
//   {
//     name: 'Zhen',
//     merlin: true,
//     spy: false,
//     socketId: 12315161,
//   },
//   {
//     name: 'Mike',
//     merlin: false,
//     spy: false,
//     socketId: 12315161,
//   },
//   {
//     name: 'Wyatt',
//     merlin: false,
//     spy: false,
//     socketId: 12315161,
//   }
// ]