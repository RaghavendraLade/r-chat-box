const express = require('express');
const app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	res.header('Access-Control-Allow-Origin', "*");
	res.send('Hello World!')
})

const messages = [];

app.get('/message/:message/user/:user',function(req,res){
	var newMessage = {};
	newMessage.user = req.params.user;
	newMessage.message = req.params.message;
	messages.push(newMessage);
	res.header('Access-Control-Allow-Origin', "*");
	res.send('Message Sent');
});

app.get('/allSMS',function(req, res){
	res.header('Access-Control-Allow-Origin', "*");
	res.send(messages);
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
});

