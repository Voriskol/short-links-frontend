'use client'
import styles from "./ComponentFooter.module.css";
import Image from "next/image";


const FooterComponent = () => {
    return (
        <>
            <section className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footer__flex}>
                        <div className={styles.footer__flexItem}>
                            <Image src="/VK.svg"
                                   width={24}
                                   height={25}
                                   alt="VKlogo"
                                   className={styles.VKlogo}/>
                            <Image src="/Telegram.svg"
                                   width={24}
                                   height={25}
                                   alt="TGlogo"
                                   className={styles.TGlogo}/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default FooterComponent;