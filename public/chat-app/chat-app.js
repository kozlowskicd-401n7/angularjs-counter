// const io = require('socket.io-client');

// const url = 'http://localhost:8080';
// const url = 'https://js-401-socket-io-server.herokuapp.com';
// const socket = io.connect(url);

angular.module('chatApp', [])
.controller('chatController', function() {

  // const socket = io('http://localhost:8080')
  const chatController = this;

  // socket.on('incoming', payload => {
  //   chatController.updateWords(payload);
  // });

  chatController.typedInput = '';
  chatController.words = [],
  chatController.history = [],


  chatController.updateWords = function(inputWords) {
    chatController.words.push(inputWords);
    chatController.checkWordList();
    chatController.history.push(inputWords);
  }

  chatController.checkWordList = function() {
    while(chatController.words.length > 15) {
      chatController.words.shift();
    };
  }
    
  chatController.handleSubmit = function() {
    chatController.updateWords(chatController.typedInput);
    // socket.emit('troll', chatController.typedInput);
    chatController.typedInput = '';
  };
  
});