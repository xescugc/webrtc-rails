var socket = io.connect('127.0.0.1:2013');

var room = "room-name" //prompt("Enter room name:");

var isInitializer

socket.on("created", function (){
  console.log("On Created");
  isInitializer = true;
})

socket.on("joinded", function(){
  console.log("On Joinded");
  isInitializer = false;
})

socket.on("full", function(){
  console.alert("Room Full, max number of 2");
})
