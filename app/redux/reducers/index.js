import { combineReducers } from 'redux';

const initialState = {
    filmId: 0,
    profileId: 0,
    film: [],
    feed: [],
    me: {},
    profile: {}
}

const downstreamData = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_FEED':
            const feed = action.data.items;
            return { ...state, feed }
        case 'GET_FILM':
            const film = action.data;
            console.log(action.data)
            return { ...state, film }
        case 'GET_PROFILE':
            const profile = action.data;
            return { ...state, profile }
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