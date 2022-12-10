import React from "react";
import style from './Messages.module.css';
import User from "./User/User";
import Message from "./Message/Message"


export default function Messages(props) {
    const UserInfo = props.dataUserInfo.map((item, index) => <User key={index} userId={item.id} userName={item.name} />)
    const Messages = props.dataMessage.map((item, index) => <Message key={index} messageId={item.id} messageText={item.text} />)


    function onAddMessage() {
        props.addMessage();
    }
    function onChangeMessage(event) {
        let message = event.target.value;
        props.changeMessage(message)
    }

    return (
        <div className="dialogs">
            <h2 className={style.title}>DIALOGS</h2>
            <div className={style.dialogsContent}>
                <div className={style.users}>
                    {UserInfo}
                </div>
                <div className={style.messages}>
                    <div className={style.messagesValue}>
                        {Messages}
                    </div>
                    <div className={style.messagesInput}>
                        <input onChange={onChangeMessage} value={props.messageValue} placeholder="Enter your message" type="text" />
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}