import Link from "next/link"
import Image from "next/image"
import styles from "./Welcome.module.scss"

const Welcome = () => {
    return (
        <section className={`${styles.heroSection} container`}>
            <div className={styles.contentColumn}>
                <div className={styles.heroHeading}>
                    <h1>Создаем сайты</h1>
                    <p>которые работают на ваш успех</p>
                </div>

                <div className={styles.servicesList}>
                    <ul  className={styles.customList} >
                        <li><span className={styles.number}>/01</span> Разработка сайтов</li>
                        <li><span className={styles.number}>/02</span> Автоматизация бизнеса</li>
                        <li><span className={styles.number}>/03</span> Разработка мобильных приложений</li>
                        <li><span className={styles.number}>/04</span> Уникальный дизайн</li>
                        <li><span className={styles.number}>/05</span> Продвижение и маркетинг</li>
                    </ul>
                </div>

                <div className={styles.ctaWrapper}>
                    <Link href="#" className={styles.ctaButton}>
                        рассчитать стоимость
                    </Link>
                </div>
            </div>

            <div className={styles.imageColumn}>
                <div className={styles.imageContainer}>

                    <Image
                        src="/images/ec80f1c657283f1236c05101b0750856.jpg"
                        alt="Portfolio showcase"
                        width={712}
                        height={712}
                        className={styles.heroImage}
                    />
                    <div className={styles.portfolioLabel}>
                        <a href="#">
                            <p>портфолио <span>→</span></p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome

