import Link from "next/link"
import Image from "next/image"
import styles from "./Buisnes.module.scss"


const Buisnes = () => {
    return (
        <section className={`${styles.container} container`} >
            <div className={styles.cardWrapper}>
                <div className={`${styles.card} ${styles.cardOne}`}>

                    <div  className={`${styles.cardTitleWrap}`} >
                        <h2>У ВАС УЖЕ ЕСТЬ БИЗНЕС? →</h2>
                    </div>

                    <p>Мы с радостью поможем <br/> вашему бизнесу достичь новых высот!</p>
                    <ul>
                        <li>Оптимизируем процессы</li>
                        <li>Внедрим инновации</li>
                        <li>Укрепим позиции</li>
                    </ul>
                    <p>Давайте вместе сделаем <br/> ваш бизнес еще более успешным!</p>
                </div>
                <div  className={`${styles.card} ${styles.cardTwo}`}>
                    <div  className={`${styles.cardTitleWrap}`} >
                        <h2>У ВАС ЕСТЬ НЕРЕАЛИЗОВАННАЯ ИДЕЯ? →</h2>
                    </div>
                    <p>
                        <span>Каждая великая идея заслуживает реализации.</span> Мы готовы поддержать вас
                        на всех этапах – от разработки концепции до создания готового
                        продукта.
                    </p>
                    <div className={styles.process}>
                        <span>📄</span>
                        <span className={styles.arrow}>→</span>
                        <span>🚀</span>
                    </div>
                    <p>
                        Давайте превратим ваши задумки в работающий проект, который изменит
                        мир!
                    </p>
                </div>
            </div>
            <div className={styles.buttonWrapp} >
                <button className={styles.button}>РАССКАЖИТЕ НАМ</button>
            </div>
        </section>


    )
}

export default Buisnes
