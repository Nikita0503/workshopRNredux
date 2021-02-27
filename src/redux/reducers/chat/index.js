import {ChatActions} from '../../actions'

const initialState = {
    message: '',
    history: [{
        id: 0,
        isMy: false,
        text: "Hello))"
    }]
}

const reducer = (state = initialState, action) => {
    console.log("reducer => ", action)
    switch(action.type){
        case ChatActions.SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case ChatActions.ADD_MESSAGE_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload],
                message: ''
            }
        default: 
            return state;
    }
}

export default reducer;