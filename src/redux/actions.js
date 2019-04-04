import types from './types.js';

//define an action creator, in this case, an action creator to add message.
const addMessage = (message) => {
    // running this code is like telling Redux what to do
    return {
        type: types.ADD,
        message: message
    }
}

export default {
    addMessage,
}