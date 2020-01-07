import { combineReducers } from 'redux';

// const initialState = {
//     page: {
//         film: null,
//         profile: null,
//         feed: [],
//         user: {
//             id: 1,
//         },
//         me: null
//     }
// }

// const page = (state = {}, action) => {
//     switch(action.type) {
//         case 'GET_FILM':
//             return {...state, film: action.film};
//         case 'GET_FEED':
//             return {...state, film: action.feed};
//         case 'GET_PROFILE':
//             return {...state, profile: action.profile};
//         case 'GET_ME':
//             return {...state, me: action.me};
//         default:
//             return state.feed
//     }
// }

const downstreamData = (state = {}, action) => {
    switch(action.type) {
        case 'GET_FEED':
            return action.data.items;
        case 'GET_FILM':
            return state
        default:
            return state;
    }
}

const token = (state = '', action) => {
    if (action.type === 'GET_TOKEN') {
        return action.token
    } else {
        return state
    }
}

export default combineReducers({
    token,
    downstreamData
});