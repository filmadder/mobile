import AsyncStorage from '@react-native-community/async-storage';

const url = 'ws://localhost:8000/socket/';

let ws = null;
let queue = {};
let nextId = 1;

const open = () => {
    if (ws !== null && ws.readyState === WebSocket.OPEN) {
        return Promise.resolve();
    }

    return new Promise(function(resolve, reject) {
        AsyncStorage.getItem('token').then(token => {
            ws = new WebSocket(url + token);
    
            ws.onmessage = event => {
                const data = JSON.parse(event.data);
               
                if (queue.hasOwnProperty(data['id'])) {
                    queue[data['id']](data);
                    delete queue[data['id']];
                }
            };

            ws.onerror = err => {
                console.warn(err)
            }

            ws.onopen = () => {
                resolve()
            }
            
        }).catch(err => {
            console.warn(err)
            reject()
        })
    })

}

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
            console.warn(err)
            reject()
        });
    });
}