
var model = require('../model');

var activeSockets = [];

module.exports = {
    connection: function (socket) {
        console.log('a user connected');
        activeSockets.push(socket);
        handleDisconnect(socket);


    }
}

//disconnect function
var handleDisconnect = function (socket) {
    socket.on('disconnect', function(reason) {
        //remove socket from activeSockets 
        console.log('A user disconnected');
        for (var i = 0; i < activeSockets.length; i++) {
            if (activeSockets[i].id === socket.id) {
                activeSockets.splice(i, 1);
            }
        }
    });
}

// YUNUS EXAMPLE OF WHAT YOU NEED TO CONNECT TO
//callback is called every interval to emit updated data
// model.emitInitialization(function (playersArr) {
//     for (var i = 0; i < activeSockets.length; i++) {
//         console.log('Emitting to: ' + i);
//         activeSockets[i].emit('initialization', { update: playersArr });
//     }
// })