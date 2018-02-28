class PlayerInstance {
  constructor(playerName, isRes, isMer, isSpy, isAssa) {
    this.playerName = playerName;
    this.isRes = isRes;
    this.isMer = isMer;
    this.isSpy = isSpy;
    this.isAssa = isAssa;
  }

  getMissionStatusValues(value) {
    console.log(value);
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