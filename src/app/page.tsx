
import styles from "./page.module.css";



import AuthorizationComponent from "@/components/Authorization/AuthorizationComponent";
import TransformLinksComponent from "@/components/TransformLinks/TransformLinksComponent";

export default function Home() {
    return (
        <main className={styles.main}>
            <AuthorizationComponent/>
            <TransformLinksComponent/>



        </main>
    );
}
