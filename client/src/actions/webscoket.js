import stompjs from 'stompjs';
import SockJS from 'sockjs-client';
import { DESTINATION_PREFIX } from '../constants/websocket';
import { SERVER_URL } from '../constants/index';

var sock = new SockJS(SERVER_URL + DESTINATION_PREFIX);
sock.onopen = function() {
    console.log('open');
    sock.send('test');
};

sock.onmessage = function(e) {
    console.log('message', e.data);
    sock.close();
};

sock.onclose = function() {
    console.log('close');
};
