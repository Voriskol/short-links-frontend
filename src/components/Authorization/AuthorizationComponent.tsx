'use client'
import styles from "./ComponentAuthorization.module.css";
import Link from "next/link";
const AuthorizationComponent = () => {
    return (
        <>
            <section className={styles.authorization}>
                <div className={styles.container}>
                    <h1 className={styles.authorization__h1}>Сервис коротких ссылок Ту.Клик</h1>
                    <h3 className={styles.authorization__h3}>Аудитория в цифрах</h3>
                    <h4 className={styles.authorization__h4}>Управление маркетинговым трафиком</h4>
                    <div className={styles.authorization__buttons}>
                        <Link href={"#"}><button className={styles.authorization__buttonsItem}>Зарегистрироваться</button></Link>
                        <Link href={"#"}><button className={styles.authorization__buttonsItem}>Войти в свой аккаунт</button></Link>
                    </div>
                </div>
            </section>
        </>

    );
};

export default AuthorizationComponent;