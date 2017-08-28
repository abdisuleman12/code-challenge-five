myApp.service('MessagesService', ['$http', function ($http) {
    console.log('message service loaded');

    var self = this;

    self.messages = { list: [] };

    self.getMessages = function () {
        $http.get('/messages').then(function (response) {
            self.messages.list = response.data
        })
    };

    self.insertMessages = function (newMessage) {
        console.log('sending to mongo' , newMessage);

        $http.post('/messages', newMessage).then(function (response) {
            console.log('post response', response)
            self.getMessages();

            // insert get messages function call 
        });
    }; // end of insert mess function 


}]); // end of service 