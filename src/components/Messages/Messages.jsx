import React from "react";
import style from './Messages.module.css';
import User from "./User/User";
import Message from "./Message/Message"
import { useForm } from "react-hook-form";


const MessageForm = (props) => {

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
        mode: 'all',
    });

    const onSubmit = (data) => {
        props.addMessage(data.messageValue);
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
                className={errors?.messageValue ? style.textareaError : ''}
                rows='3'
                cols={100}
                maxLength='301'
                placeholder="Enter your message"
                {...register('messageValue', {
                    required: 'Поле обязательно для ввода!',
                    minLength: {
                        value: 3,
                        message: 'Минимальная длина 3 символа!'
                    },
                    maxLength: {
                        value: 300,
                        message: 'Максимальная длина 250 символов!'
                    }
                })}
            />
            <div className={style.errorMessage}>
                {errors?.messageValue && <p>{errors?.messageValue?.message || 'Непридвиденая Ошибка'}</p>}
            </div>
            <input value={''} type="submit" disabled={!isValid} className={style.messageSubmit} />
        </form>
        // <input onChange={onChangeMessage} value={props.messageValue} placeholder="Enter your message" type="text" />
        // <button onClick={onAddMessage}>Send</button>
    )
}



export default function Messages(props) {
    const UserInfo = props.dataUserInfo.map((item, index) => <User key={index} userId={item.id} userName={item.name} />)
    const Messages = props.dataMessage.map((item, index) => <Message key={index} messageId={item.id} messageText={item.text} />)

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
                        <MessageForm {...props} />
                    </div>
                </div>
            </div>
        </div>
    )
}