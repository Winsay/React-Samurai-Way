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

    return (
        <div className="dialogs">
            <h2 className={style.title}>DIALOGS</h2>
            <div className={style.dialogsContent}>
                <div className={style.users}>
                    <User userId={dataUserInfo[0].id} userName={dataUserInfo[0].name} />
                    <User userId={dataUserInfo[1].id} userName={dataUserInfo[1].name} />
                    <User userId={dataUserInfo[2].id} userName={dataUserInfo[2].name} />
                    <User userId={dataUserInfo[3].id} userName={dataUserInfo[3].name} />
                    <User userId={dataUserInfo[4].id} userName={dataUserInfo[4].name} />
                </div>
                <div className={style.messages}>
                    <Message messageId={dataMessage[0].id} messageText={dataMessage[0].text} />
                    <Message messageId={dataMessage[1].id} messageText={dataMessage[1].text} />
                    <Message messageId={dataMessage[2].id} messageText={dataMessage[2].text} />
                </div>
            </div>
        </div>
    )
}