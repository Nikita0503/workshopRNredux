export const SET_MESSAGE = "CHAT::SET_MESSAGE";
export const ADD_MESSAGE_TO_HISTORY = "CHAT::ADD_MESSAGE_TO_HISTORY";

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message
}) 

export const addMessageToHistory = (newMessage) => ({
    type: ADD_MESSAGE_TO_HISTORY,
    payload: newMessage
})