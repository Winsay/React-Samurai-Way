import { addMessageActionCreator } from "../../redux/messages-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Navigate } from "react-router-dom";
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
        dataUserInfo: state.messagesPage.dataUserInfo,
        dataMessage: state.messagesPage.dataMessage,
    }
}

const addMessage = (completeMessage) => {
    return addMessageActionCreator(completeMessage);
}


// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageActionCreator())
//         },
//         changeMessage: (message) => {
//             dispatch(updateMessageActionCreator(message))
//         }
//     }
// }


// как работает то, что написано ниже, описано в ProfileContainer

const MessagesContainer = compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Messages);
export default MessagesContainer;