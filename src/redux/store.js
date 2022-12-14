import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";



const store = {
    _state: {
        profilePage: {
            dataPost: [
                { id: 1, text: 'Hey, why nobody loves me?' },
                { id: 2, text: 'Durov return wall' },
                { id: 3, text: 'Make America great again' },
                { id: 4, text: 'Thank God i\'m not a Muscovite' },
                { id: 5, text: 'Glory to Ukraine' },
            ],
            postValue: '',
        },
        messagesPage: {
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
        },
        friendData: [
            { img: 'img/pavel.png', name: 'Pavel', id: 1 },
            { img: 'img/slava.jpg', name: 'Slava', id: 1 },
            { img: 'img/leo.webp', name: 'Leo', id: 1 },
        ],
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(action, this._state.messagesPage);
        this._callSubscriber(this._state)
    }
}


export default store;
window.Storage = store