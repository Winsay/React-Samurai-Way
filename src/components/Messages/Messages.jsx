import React from "react";
import style from './Messages.module.css';
import User from "./User/User";
import Message from "./Message/Message"


export default function Messages() {

    const dataUserInfo = [
        { id: 1, name: 'Victor' },
        { id: 2, name: 'Leo' },
        { id: 3, name: 'Oleg' },
        { id: 4, name: 'Pavel' },
        { id: 5, name: 'Slava' }
    ]

    const dataMessage = [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'How old are you?' },
        { id: 3, text: 'im 21' },
    ]

    const UserInfo = dataUserInfo.map((item, index) => <User key={index} userId={item.id} userName={item.name} />)
    const Messages = dataMessage.map((item, index) => <Message key={index} messageId={item.id} messageText={item.text} />)

    return (
        <div className="dialogs">
            <h2 className={style.title}>DIALOGS</h2>
            <div className={style.dialogsContent}>
                <div className={style.users}>
                    {UserInfo}
                </div>
                <div className={style.messages}>
                    {Messages}
                </div>
            </div>
        </div>
    )
}