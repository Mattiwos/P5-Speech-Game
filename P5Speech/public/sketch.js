//Socket connection
var socket = io.connect('http://localhost:3000/')

var username = document.getElementById('Name'),
      gameroom = document.getElementById('Gameroom'),
      btn = document.getElementById('send')






// var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
// myRec.continuous = true; // do continuous recognition
// var voice = new p5.Speech(); // new P5.SpeechRec object
// myRec.interimResults = true; // allow partial recognition (faster, less accurate)

// function parseResult() {
//   // recognition system will often append words into phrases.
//   // so hack here is to only use the last word:
//   var mostrecentword = myRec.resultString.split(' ').pop();
//   console.log(mostrecentword);
// }


var loc = [];
var locx = [];
var locy = [];
var currloc = []
var xy = new Array(2);

var spcd = 21; //what the space is divided by
var startmenu = 0;
var allcurrentplayers =[];
var cpir = []
btn.addEventListener('click', ()=>{
  
  socket.emit('init', {
  gameroom: gameroom.value,
  username: username.value
});
startmenu = 1

  
});
var player;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // myRec.onResult = parseResult; // recognition callback
  // myRec.start(); // start engine 

  player = new Player(loc)
  
} 
socket.on('confirmation',(arg)=>{
  console.log(`Recieved and accepted. Room number ${arg.gameroom}`)
  console.log(`${socket.id} and recieved id ${arg.sid}`)
  allcurrentplayers = arg.cpnid
  console.log(arg.cpnid)
  console.log(allcurrentplayers)
  // for (var i = 0; i > allcurrentplayers.length; i++){
  //   if (allcurrentplayers[i][1] == gameroom){
  //     cpir.push(allcurrentplayers[i])
  //   }
  // }

})

socket.on('errormessage', (arg)=>{
  console.log(arg)

})



function draw() {
  if (startmenu === 1){

    var spcw = width/spcd;
    var spch = height/spcd;
    background(144)
    dividemap()
    

    //two diffrent methods for location
    fill(0,255,0)
    rect(locx[0],locy[0],spcw,spch)
    fill(255,0,0)
    rect(loc[2][0],loc[0][1],spcw,spch) //I can add if location is occupid and rank with this method
  


    player.newpos(loc, spcw, spch)
    player.display(currloc)
    player.movement(2,2,3,2,currloc);
  
  



  }
}






class Rival{
  constructor(arg){
    this.data = arg



  }
  recievedata(){
    socket.on('recievedata', (arg)=>{
        this.loc = arg.loc
        this.currloc = arg.currloc

    })
  }
  

}
