
var model = require('../model');

var activeSockets = [];

module.exports = {
    connection: function (socket) {
        console.log('a user connected');
        activeSockets.push(socket);

        //special host user inputs
        if (activeSockets.length === 1) {
            socket.host = true;
            socket.on('initialize', initalizeGame) 
        }

        socket.on('nameEntry', handleNameEntry(socket));

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

var initializeGame = function(data) {
    //data needs to be object with merlin true or false
    var nameArr = [];
    for (var i = 0; i < activeSockets.length; i ++) {
        nameArr.push(activeSockets[i]);
    }
    
    //call initalization function giving arguments ([{name:},...])
    model.initialization(nameArr, data.merlin);
    
}

var handleNameEntry = function(socket) {
    return function(name) {
        socket.name = name;
    }
}

// CONNECTIONS TO MODELS (EMIT REACTIONS)/OUTPUTS
// who the spies are? who merlin is? and who starts
model.emitInitialization(function (playersArr) {
    for (var i = 0; i < activeSockets.length; i++) {
        console.log('Emitting to: ' + i);
        activeSockets[i].emit('initialization', playersArr);
    }
})

//game state
model.updateTable(function (playersArr) {
    for (var i = 0; i < activeSockets.length; i++) {
        console.log('Emitting to: ' + i);
        activeSockets[i].emit('initialization', playersArr);
    }
})

//game state
model.updateTable(function (playersArr) {
    for (var i = 0; i < activeSockets.length; i++) {
        console.log('Emitting to: ' + i);
        activeSockets[i].emit('initialization', playersArr);
    }
})