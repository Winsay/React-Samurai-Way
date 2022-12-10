import { updateMessageActionCreator, addMessageActionCreator } from "../../redux/messages-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        messageValue: state.messagesPage.messageValue,
        dataUserInfo: state.messagesPage.dataUserInfo,
        dataMessage: state.messagesPage.dataMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        changeMessage: (message) => {
            dispatch(updateMessageActionCreator(message))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer