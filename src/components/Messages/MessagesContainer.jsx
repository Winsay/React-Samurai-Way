import React from "react";
import { updateMessageActionCreator, addMessageActionCreator } from "../../redux/messages-reducer";
import Messages from "./Messages";
import storeContext from "../../storeContext";


export default function MessagesContainer(props) {
    return (
        <storeContext.Consumer>{
            (store) => {
                let state = store.getState().messagesPage

                function addMessage() {
                    store.dispatch(addMessageActionCreator());
                }
                function changeMessage(message) {
                    store.dispatch(updateMessageActionCreator(message));
                }
                return (
                    <Messages addMessage={addMessage}
                        changeMessage={changeMessage}
                        messagesValue={state.messagesValue}
                        dataUserInfo={state.dataUserInfo}
                        dataMessage={state.dataMessage} />
                )
            }
        }
        </storeContext.Consumer>
    )
}