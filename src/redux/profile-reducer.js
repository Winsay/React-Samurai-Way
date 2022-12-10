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
            state.dataPost.push({ id: state.dataPost.length + 1, text: state.postValue })
            console.log(state.dataPost);
            state.postValue = '';
            console.log(state.postValue)
            return state
        case UPDATE_POST:
            state.postValue = action.newText;
            console.log(state.postValue)
            return state
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