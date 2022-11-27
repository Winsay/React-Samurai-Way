import React from "react";
import style from './Messages.module.css';
import User from "./User/User";
import Message from "./Message/Message"


export default function Messages(props) {
    const UserInfo = props.messagesPage.dataUserInfo.map((item, index) => <User key={index} userId={item.id} userName={item.name} />)
    const Messages = props.messagesPage.dataMessage.map((item, index) => <Message key={index} messageId={item.id} messageText={item.text} />)

    // const messageText = React.createRef();
    // function addMessage() {
    //     (messageText.current.value.toLowerCase() === 'pasha') ? alert(`${messageText.current.value}, fuck u leatherman`) : alert(messageText.current.value)
    // }

    return (
        <div className="dialogs">
            <h2 className={style.title}>DIALOGS</h2>
            <div className={style.dialogsContent}>
                <div className={style.users}>
                    {UserInfo}
                </div>
                <div className={style.messages}>
                    {Messages}
                    {/* <input ref={messageText} type="text" />
                    <button onClick={addMessage}>Send</button> */}
                </div>
            </div>
        </div>
    )
}