var socket = io.connect('192.168.1.37:2013');
// var socket = io.connect('127.0.0.1:2013');

// var room = "room-name" //prompt("Enter room name:");
var room = window.location.pathname.replace("/", "");

socket.on("created", function (){
  console.log("On Created");
  isInitiator = true;
  console.log('isInitiator', isInitiator);
})

socket.on("joined", function(){
  console.log("Some one Joinded");
  isChannelReady = true;
})

socket.on("full", function(){
  console.alert("Room Full, max number of 2");
})

socket.on("message", function(data) {
  if (data.type === 'gotStream') {
    console.log(data.message);
    maybeStart();
  }else if (data.type === 'candidate' && isStarted) {
    var candidate = new RTCIceCandidate({
      candidate: data.message.candidate,
      sdpMLineIndex:  data.message.sdpMLineIndex
    });
    pc.addIceCandidate(candidate);  
  }else if (data.type === 'answer' && isStarted) {
    pc.setRemoteDescription(new RTCSessionDescription(data.message));
  }else if (data.type === 'offer') {
    if (!isInitiator && !isStarted) {
      maybeStart();
    }   
    pc.setRemoteDescription(new RTCSessionDescription(data.message));
    startAnswer();
  }else if (data.type === 'im') {
    appendNewIM(data.message.user, data.message.content);
  }else if (data.type === 'by') {
    stop();
  }
})
