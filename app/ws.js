import AsyncStorage from '@react-native-community/async-storage';
import { wsUrl } from './settings';
import { EventRegister } from 'react-native-event-listeners'

const url = wsUrl + '/socket/';

let ws = null;
let queue = {};
let nextId = 1;
// let emitter = new Emitter();

export const open = () => {
    if (ws !== null && ws.readyState === WebSocket.OPEN) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('token').then(token => {
            if (!token) {
                reject('NOTOKEN');
                return;
            }

            ws = new WebSocket(url + token);
            
            ws.onmessage = event => {
                const data = JSON.parse(event.data);
                
                // when a notification arrices
                if (data.hasOwnProperty('has_unread_updates') || 
                    data.type === 'new_update') {
                    EventRegister.emit('hasUpdates')
                }

                if (queue.hasOwnProperty(data['id'])) {
                    queue[data['id']](data);
                    delete queue[data['id']];
                }
            };
            
            ws.onerror = err => {
                console.warn(err)
                reject('NOCONNECTION');
                return;
            }
            
            ws.onopen = () => {
                resolve()
            }
            
        }).catch(err => {
            console.warn(err);
            reject('NOTVALID');
        })
    })
};

export const send = payload => {
    const id = nextId;
    payload['id'] = id;
    nextId += 1;

    return new Promise((resolve, reject) => {
        open()
        .then(() => {
            queue[payload['id']] = resolve;
            ws.send(JSON.stringify(payload));
        })
        .catch(err => {
            reject(err);
        });
    });
};

export const close = () => {

    if (ws !== null && ws.readyState === WebSocket.OPEN) {
        ws.close();
    }
};

export default {
    open,
    close,
    send,
}