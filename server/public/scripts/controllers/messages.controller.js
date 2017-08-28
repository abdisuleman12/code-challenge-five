myApp.controller('MessagesController', ['MessagesService',  function (MessagesService) {
    console.log('message controller loaded');
    var self = this;

    self.newMessage = {};

    self.messages = MessagesService.messages

    

    self.addMessage = function () {
        console.log('clicked add button')
        MessagesService.insertMessages(self.newMessage)
    }

}]);