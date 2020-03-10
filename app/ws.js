import AsyncStorage from '@react-native-community/async-storage';
import {wsUrl} from './settings';
import {EventRegister} from 'react-native-event-listeners';

const url = wsUrl + '/socket/';

let ws = null;
let queue = {};
let nextId = 1;

export const open = () => {
  if (ws !== null && ws.readyState === WebSocket.OPEN) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('token')
      .then(token => {
        if (!token) {
          reject({message: '', code: 'NO_AUTH_TOKEN'});
          return;
        }

        ws = new WebSocket(url + token);

        ws.onmessage = event => {
          const data = JSON.parse(event.data);

          // when a notification arrives
          if (data['has_unread_updates'] || data.type === 'new_update') {
            EventRegister.emit('hasUpdates');
          }

          // when more results arrive
          if (data.type === 'more_search_results') {
            EventRegister.emit('moreResults');
          }

          if (queue.hasOwnProperty(data['id'])) {
            queue[data['id']](data);
            delete queue[data['id']];
          }
        };

        ws.onerror = err => {
          if (err && err.message.includes('403')) {
            reject({message: err, code: 'SOCKET_ERROR'});
          } else {
            reject({message: err, code: 'NO_CONNECTION_ERROR'});
          }
        };

        ws.onopen = () => {
          resolve();
        };
      })
      .catch(() => {
        reject({message: '', code: 'NO_AUTH_TOKEN'});
      });
  });
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
        EventRegister.emit('error', err);
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
};
