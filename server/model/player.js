class PlayerInstance {
  constructor(playerName, isRes, isMer, isSpy, isAssa) {
    this.playerName = playerName;
    this.isRes = isRes;
    this.isMer = isMer;
    this.isSpy = isSpy;
    this.isAssa = isAssa;
  }
}

module.exports = PlayerInstance;






// below is an example of how to send a function as a callback to the model.js. Unused.
// getMissionStatusValues(value) {
//   console.log(value);
// }







// [ PlayerInstance {
//     playerName: 'Louis',
//     isRes: true,
//     isMer: false,
//     isSpy: false,
//     isAssa: false },
//   PlayerInstance {
//     playerName: 'Yunus',
//     isRes: true,
//     isMer: false,
//     isSpy: false,
//     isAssa: false },
//   PlayerInstance {
//     playerName: 'Wyatt',
//     isRes: false,
//     isMer: false,
//     isSpy: true,
//     isAssa: false },
//   PlayerInstance {
//     playerName: 'Zhen',
//     isRes: false,
//     isMer: false,
//     isSpy: true,
//     isAssa: false },
//   PlayerInstance {
//     playerName: 'Mike',
//     isRes: true,
//     isMer: false,
//     isSpy: false,
//     isAssa: false } ]