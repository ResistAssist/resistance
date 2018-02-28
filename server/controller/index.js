
// var model = require('../model');

var activeSockets = [];
var voteCount = 0;
var participants;


module.exports = {
    connection: function (socket) {
        console.log('a user connected');
        activeSockets.push(socket);

        //for Initialization
        //special host user inputs
        if (activeSockets.length === 1) {
            socket.host = true;
            socket.on('initialize', initalizeGame) 
        }
        socket.on('nameEntry', handleNameEntry(socket));

        //begin phase
        socket.on('activePlayerChoice', handleActivePlayerChoice); 

        socket.on('vote', handleVotes);
        socket.on('missionVote', handleMissionVotes);

        handleDisconnect(socket);
    }
}

//RESPONSE FUNCTIONS

var handleActivePlayerChoice = function(chosenArr) {
    //function to handle array of leaders choice e.g [4,7,1]
}

var handleVotes = function(socket) {
    return function (vote) {
        voteCount ++;
        socket.vote = vote;
        if (voteCount === activeSockets.length) {
            var voteArr = [];
            for (var i = 0; i < activeSockets.length; i ++) {
                voteArr.push(activeSockets[i].vote);
            }
            //function to handle votes in model called here e.g [true, false, false, true, true, ...]
        
        }
    }
}

var handleMissionVotes = function(socket) {
    return function (vote) {
        voteCount ++;
        socket.vote = vote;
        if (voteCount === participants.length) {
            var voteArr = [];
            for (var i = 0; i < participants.length; i ++) {
                voteArr.push(activeSockets[participants[i]].vote);
            }
            //function to handle votes in model called here (just votes of failures and passes) e.g 5 players 2 participants [true, true]
        }
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


//INITIALIZATION/HELPER FUNCTIONS
var initializeGame = function(data) {
    //data needs to be object with merlin true or false
    var nameArr = [];
    for (var i = 0; i < activeSockets.length; i ++) {
        nameArr.push(activeSockets[i].name);
    }
    
    //call initalization function giving arguments ([{name:},...])
    model.initialization(nameArr, data.merlin);

}

var handleNameEntry = function(socket) {
    return function(name) {
        socket.name = name;
    }
}

var initializeVote = function () {
    voteCount = 0;
    if (arguments.length === 1) {
        participants = arguments[0];
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

//emit the start of a turn (turn number/ vote count/ active player/ numParticipants)
model.emitTurnStart(function(turnNumber, voteCount, activePlayer, numParticipants) {
    for (var i = 0; i < activeSockets.length; i++) {
        console.log('Emitting to: ' + i);
        var tempObj  = {
            turnNumber:turnNumber, 
            voteCount: voteCount
        }
        if (i === activePlayer) {
            tempObj['activePlayer'] = true;
            tempObj['numParticipants'] = numParticipants;
        }
        activeSockets[i].emit('turnStart', tempObj);
    }
})

//emit selected participants for mission TBD
model.emitParticipants(function (participants) {
    for (var i = 0; i < activeSockets.length; i++) {
        console.log('Emitting to: ' + i);
        activeSockets[i].emit('initialization', participants);
    }
    initializeVote();
})

//emit start of mission vote TBD
model.emitMissionStart(function (participants) {
    for (var i = 0; i < activeSockets.length; i++) {
        console.log('Emitting to: ' + i);
        activeSockets[i].emit('initialization', participants);
    }
    initializeVote(participants);
});

//emit result of MissionVote TBD
model.emitResultMissionVote(function (participants) {
    for (var i = 0; i < activeSockets.length; i++) {
        console.log('Emitting to: ' + i);
        activeSockets[i].emit('initialization', participants);
    }
    initializeVote(participants);
});