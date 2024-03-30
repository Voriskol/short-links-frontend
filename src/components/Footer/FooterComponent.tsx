'use client'
import styles from "./ComponentFooter.module.css";
import Image from "next/image";
import Link from "next/link";


const FooterComponent = () => {
    return (
        <>
            <div className={styles.footer__topLine}></div>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footer__flex}>
                        <div className={styles.footer__flexItem}>
                            <div className={styles.logo}>
                                <Link href={"#"} className={styles.flexItem__link}>
                                    <Image src="/VK.svg"
                                           width={40}
                                           height={40}
                                           alt="VKlogo"
                                    />
                                </Link>
                            </div>
                            <div className={styles.logo}>
                                <Link href={"#"} className={styles.flexItem__link}>
                                    <Image src="/Telegram.svg"
                                           width={40}
                                           height={40}
                                           alt="TGlogo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.footer__flexItem}>
                            <div className={styles.flexItem__details}>
                                <h2 className={styles.flexItem__title}>
                                    Сервис
                                </h2>
                                <nav className={styles.flexItem__navigation}>
                                    <div className={styles.flexItem__link}><Link href={"#"}>Начало</Link></div>
                                    <div className={styles.flexItem__link}><Link href={"#"}>Тарифы</Link></div>
                                    <div className={styles.flexItem__link}><Link href={"#"}>Ответы на вопросы</Link></div>
                                    <div className={styles.flexItem__link}><Link href={"#"}>Обратная связь</Link></div>
                                </nav>
                            </div>
                        </div>
                        <div className={styles.footer__flexItem}>
                            <div className={styles.flexItem__details}>
                                <h2 className={styles.flexItem__title}>
                                    Поддержка
                                </h2>
                                <nav className={styles.flexItem__navigation}>
                                    <div className={styles.flexItem__link}><Link href={"#"}>Описание API</Link></div>
                                    <div className={styles.flexItem__link}><Link href={"#"}>Пожаловаться</Link></div>
                                </nav>
                            </div>
                        </div>
                        <div className={styles.footer__flexItem}>
                            <div className={styles.flexItem__details}>
                                <h2 className={styles.flexItem__title}>
                                    Быстрый доступ
                                </h2>
                                <nav className={styles.flexItem__navigation}>
                                    <div className={styles.flexItem__link}>
                                        <Link href={"#"}>Создать ссылку</Link></div>
                                    <div className={styles.flexItem__link}>
                                        <Link href={"#"}>Войти в аккаунт</Link></div>
                                    <div className={styles.flexItem__link}>
                                        <Link href={"#"}>Зарегистрироваться</Link></div>
                                    <div className={styles.flexItem__link}>
                                        <Link href={"#"}>Статус аккаунта</Link></div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterComponent;