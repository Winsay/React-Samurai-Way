const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";


let initialState = {
    dataPost: [
        { id: 1, text: 'Hey, why nobody loves me?' },
        { id: 2, text: 'Durov return wall' },
        { id: 3, text: 'Make America great again' },
        { id: 4, text: 'Thank God i\'m not a Muscovite' },
        { id: 5, text: 'Glory to Ukraine' },
    ],
    postValue: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                dataPost: [...state.dataPost, { id: state.dataPost.length + 1, text: state.postValue }],
                postValue: '',
            }

        case UPDATE_POST:
            return {
                ...state,
                postValue: action.newText
            }

        default: return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST }) // можно не писать return

export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newText: text
    }
}

export default profileReducer;