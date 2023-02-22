import style from "./Login.module.css"
import React from "react";
import { useForm } from "react-hook-form";



const LoginForm = () => {

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
        mode: 'all',
        defaultValues: { rememberMe: false }
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
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
                        minLength: {
                            value: 8,
                            message: 'Минимальная длина пароля 8 символов'
                        }
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
        </form>
    )
}


export default function Login(props) {
    return (
        <div className={style.loginWrapp}>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}