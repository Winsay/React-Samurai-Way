const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE"

let initialState = {
    dataUserInfo: [
        { id: 1, name: 'Victor' },
        { id: 2, name: 'Leo' },
        { id: 3, name: 'Oleg' },
        { id: 4, name: 'Pavel' },
        { id: 5, name: 'Slava' }
    ],
    dataMessage: [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'How old are you?' },
        { id: 3, text: 'im 21' },
    ],
    messageValue: '',
}


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                dataMessage: [...state.dataMessage, { id: state.dataMessage.length + 1, text: state.messageValue }],
                messageValue: ''
            }

        case CHANGE_MESSAGE:
            return {
                ...state,
                messageValue: action.newMessage
            }

        default: return state;
    }
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateMessageActionCreator = (message) => {
    return {
        type: CHANGE_MESSAGE,
        newMessage: message,
    }
}

export default messagesReducer;