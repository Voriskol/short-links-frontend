'use client'
import styles from "./ComponentTransformLinks.module.css";
import {useState} from "react";
import {LinkService} from "@/services/Link";
import {Simulate} from "react-dom/test-utils";


const TransformLinksComponent = () => {
    const [link, setLink] = useState("")
    const [shortLink, setShortLink] = useState("")

    const createShortLink = async (link:string) => {
        await LinkService.create(link).then((response) => {
            setShortLink(response.content.short_link)

        }).catch((error) => {console.log(error)})


    }

    return (
        <>
            <section className={styles.TransformLinks}>
                <div className={styles.container}>
                    <h3 className={styles.TransformLinks__h3}>Сократите длинную ссылку</h3>
                    <h4 className={styles.TransformLinks__h4}>Наш сервис пока хуево с этим справляется</h4>
                    <div className={styles.TransformLinks__shortener}>
                        <p className={styles.shortener__pInput}>Вставьте ссылку</p>
                        <input type="text"
                               placeholder={"Пример: http://super-long-link.com/shorten-it"}
                               className={styles.shortener__input}
                               onChange={event => setLink(event.target.value)}
                               value={link}
                        />
                        <button className={styles.shortener__button}
                                onClick={()=>createShortLink(link)}
                        >Сократить</button>
                        <p className={styles.shortener__pInput}>Результат</p>
                        <input type="text"

                               placeholder={"Сокращенная ссылка"}
                               className={styles.shortener__output}
                               value={shortLink}
                        />


                    </div>

                </div>

            </section>
        </>
    );
};

export default TransformLinksComponent;