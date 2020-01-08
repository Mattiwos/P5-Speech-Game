var url = 'http://mylogger.io/log';
const EventEmitter = require('events');


class Logger extends EventEmitter{
    log(message){
        //sends an http requestst
        console.log('messageßß')
    
        //raise event
        this.emit('messageLogged',{id: 1, url: 'httplol'}); //make anoise, produce singal
    
    
    }

}


module.exports = Logger;
