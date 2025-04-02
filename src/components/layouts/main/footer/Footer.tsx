
import styles from './Footer.module.scss'
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.wrapper} container`}>
                <Image src="/images/logo.svg" alt="logo" width={150} height={50} priority/>
                <nav>
                    <ul className={styles.navList}>
                        <li>услуги</li>
                        <li>портфолио</li>
                        <li>сотрудничество</li>
                        <li>контакты</li>
                    </ul>
                </nav>
                <div className={styles.wrapPhone}>
                    <div className={styles.wrapBtn}>
                        <div>
                            <p>ru</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
