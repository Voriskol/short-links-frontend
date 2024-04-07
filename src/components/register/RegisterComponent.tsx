'use client'
import styles from "./ComponentRegister.module.css";
import {FormEventHandler} from "react";
import toast from "react-hot-toast";
import {AuthService} from "@/services/Auth";

const RegisterComponent = () => {
    const RegisterHandler: FormEventHandler<HTMLFormElement> = async (Event) => {
        Event.preventDefault();
        
        const username = (Event.currentTarget.elements.namedItem('username') as HTMLInputElement).value;
        const email = (Event.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
        const password = (Event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
        
        if(username === '' || email === '' || password === '') {
            toast.error('Заполните все поля');
            return;
        }
        
        await AuthService.registration({username, email, password}).then(() => {
            toast.success('Регистрация прошла успешно');
        }).catch(() => {
            toast.error('Что-то пошло не так');
            return;
        }).finally(() => {
            Event.currentTarget.reset();
        })
    }

    return (
        <>
                <section className={styles.register}>
                    <div className={styles.container}>
                        <form className={styles.register__block}
                        onSubmit={RegisterHandler}>
                            <h2>Давайте начнём прямо сейчас!</h2>
                            <div className={styles.register__blockItem}>
                                <input type="text"
                                       name="username"

                                       placeholder={"Username"}
                                       className={styles.registration__input}
                                />
                            </div>
                            <div className={styles.register__blockItem}>
                                <input type="email"
                                       name="email"
                                       required
                                       placeholder={"Email"}
                                       className={styles.registration__input}
                                />
                            </div>
                            <div className={styles.register__blockItem}>
                                <input type="password"
                                       name="password"
                                       required
                                       placeholder={"Password"}
                                       className={styles.registration__input}
                                />
                            </div>
                            <button className={styles.register__button}>Register</button>
                        </form>

                    </div>

                </section>
        </>
    );
};

export default RegisterComponent;