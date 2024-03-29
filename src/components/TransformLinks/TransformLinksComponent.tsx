'use client'
import styles from "./ComponentTransformLinks.module.css";

const TransformLinksComponent = () => {
    return (
        <>
            <section className={styles.TransformLinks}>
                <div className={styles.container}>
                    <h3 className={styles.TransformLinks__h3}>Сократите длинную ссылку</h3>
                    <h4 className={styles.TransformLinks__h4}>Наш сервис охуительно с этим справляется</h4>
                    <div className={styles.TransformLinks__shortener}>
                        <p className={styles.shortener__pInput}>Вставьте ссылку</p>
                        <input type="text" placeholder={"Пример: http://super-long-link.com/shorten-it"}
                               className={styles.shortener__input}/>
                        <button className={styles.shortener__button}>Сократить</button>
                        <p className={styles.shortener__pInput}>Результат</p>
                        <input type="text" readOnly={true}  placeholder={"Сокращенная ссылка"}
                               className={styles.shortener__output}/>


                    </div>

                </div>

            </section>
        </>
    );
};

export default TransformLinksComponent;