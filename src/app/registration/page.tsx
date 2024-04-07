import styles from "@/app/page.module.css";
import RegisterComponent from "@/components/register/RegisterComponent";


export default function Home() {
    return (
        <main className={styles.main}>
            <RegisterComponent/>
        </main>
    );
}