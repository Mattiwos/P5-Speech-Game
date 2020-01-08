var express = require('express');
var socket = require('socket.io')
var port = process.env.PORT || 3000;
var gameroom;
var username;
var userid;
var cpnid = [];
var maxplayerlimit = 2;
var pt;
//appsetup
var app = express();
var server = app.listen(port, ()=>{
});

//static files
app.use(express.static('public'));
app.use(express.static('src'));

//Socket setup
var io = socket(server); //sets up back

io.on('connection', (socket)=>{
    
    
    userid = socket.id

    socket.on('init', (arg)=>{
        console.log(`username: ${arg.username}`)
        console.log(`Gameroom ${arg.gameroom}`)
        gameroom = arg.gameroom
        username = arg.username
        console.log(arg)
        for (var i = 0; i > cpnid.length; i++){
            if (cpnid[i][1] == gameroom){
                
                pt +=1
                console.log(`Number of users is ${pt}`)

            }
        }
        if (maxplayerlimit >= pt){
            console.log("final check")
            socket.join(gameroom)
            cpnid.push([username,gameroom,socket.id])
        

            io.to(gameroom).emit('confirmation',{
                gameroom: gameroom,
                username: username,
                sid: userid,
                cpnid: cpnid

            })
        }
        else{
            io.emit('errormessage',"To many users in the gameroom")
        }
        

        
    })

    socket.on('disconnect',(arg)=>{
    
    
    });


})
