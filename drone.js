var keypress = require('keypress');
var arDrone = require('ar-drone');
var client = arDrone.createClient();
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  switch(key.name){
  	case 't':
  		console.log('take off', key.name);
      client.takeoff();
  		break;
  	case 'l':
  		console.log('landing', key.name);
      client.stop();
      client.land();
  		break;
  	case 'w':
  		console.log('move forward', key.name);
      client.front(2);
      //client.stop();
  		break;
  	case 'a':
  		console.log('move left', key.name);
  		break;
  	case 's':
  		console.log('move backwards', key.name);
      client.back(2);
      //client.stop();
  		break;
  	case 'd':
  		console.log('move right', key.name);
  		break;
  	case 'f':
  		console.log('do a flip', key.name);
  		break;
  	case 'q':
  		process.stdin.pause();
      process.stdin.exit();
      client.land();
  		break;
    case 'x':
      client.stop();
      client.land();
  }
});

process.stdin.on('keyup', function (ch, key) {
  client.stop();
});

process.stdin.setRawMode(true);
process.stdin.resume();
