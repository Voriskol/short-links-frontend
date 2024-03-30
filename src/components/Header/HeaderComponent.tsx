'use client'
import styles from "./ComponentHeader.module.css";
import Link from "next/link";
const HeaderComponent = () => {
    return (

            <header className={styles.header}>
                <div className={styles.container}>
                    <ul className={styles.NavBar}>
                        <Link href={"#"}>
                            <li>Начало</li>
                        </Link>
                        <Link href={"#"}>
                            <li>Тарифы</li>
                        </Link>
                        <Link href={"#"}>
                            <li>Ответы на вопросы</li>
                        </Link>
                        <Link href={"#"}>
                            <li>Обратная связь</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.header__topLine}></div>
            </header>


    );
};

export default HeaderComponent;