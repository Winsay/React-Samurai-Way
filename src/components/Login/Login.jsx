import style from "./Login.module.css"
import React from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";



const LoginForm = (props) => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'all',
        defaultValues: { rememberMe: false }
    });

    const onSubmit = (data) => {
        props.userLogin(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`${style.loginInput} ${errors?.email?.message ? style.loginInput__error : ''}`}>
                <label>Email</label>
                <input
                    {...register('email', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 5,
                            message: 'Не меньше 5 символов'
                        }
                    })}
                    placeholder="Email" />
                <div className={style.errorMessage}>
                    {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
                </div>
            </div>
            <div className={`${style.loginInput} ${errors?.password?.message ? style.loginInput__error : ''}`}>
                <label>Password</label>
                <input
                    {...register('password', {
                        required: 'Поле обязательно к заполнению',
                    })}
                    type={'password'}
                    placeholder="Password" />
                <div className={style.errorMessage}>
                    {errors?.password && <p>{errors?.password?.message || 'Error'}</p>}
                </div>
            </div>
            <div className={style.submitWrapp}>
                <div className={style.loginCheck}>
                    <label>
                        <input
                            {...register('rememberMe', {
                            })}
                            type={"checkbox"}
                        />
                        <span></span>
                        Remember me
                    </label>
                </div>
                <div className={style.loginSubmit}>
                    <input type="submit" value={'Login'} disabled={!isValid} />
                </div>
            </div>
            <div className={style.errorMessage}>
                {props.errorMessage ? <p>{props.errorMessage}</p> : ''}
            </div>
        </form>
    )
}


export default function Login(props) {
    debugger;
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div className={style.loginWrapp}>
            <h1>Login</h1>
            <LoginForm {...props} />
            <div className={style.testData}>
                <h3>Тестовые данные.</h3>
                <p>Email: <span>free@samuraijs.com</span></p>
                <p>Password: <span>free</span></p>
            </div>
        </div>
    )
}