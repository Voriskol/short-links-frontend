
import styles from "./page.module.css";



import AuthorizationComponent from "@/components/Authorization/AuthorizationComponent";
import TransformLinksComponent from "@/components/TransformLinks/TransformLinksComponent";
import FooterComponent from "@/components/Footer/FooterComponent";

export default function Home() {
    return (
        <main className={styles.main}>
            <AuthorizationComponent/>
            <TransformLinksComponent/>
            <FooterComponent/>



        </main>
    );
}
