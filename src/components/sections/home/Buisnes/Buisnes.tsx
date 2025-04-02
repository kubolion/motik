import Link from "next/link"
import Image from "next/image"
import styles from "./Buisnes.module.scss"


const Buisnes = () => {
    return (
        <section className={`${styles.container} container`} >
            <div className={styles.cardWrapper}>
                <div className={`${styles.card} ${styles.cardOne}`}>

                    <div  className={`${styles.cardTitleWrap}`} >
                        <h2>У ВАС УЖЕ ЕСТЬ БИЗНЕС?  <span>→</span></h2>
                    </div>

                    <p>Мы с радостью поможем <br/> вашему бизнесу достичь новых высот!</p>
                    <ul>
                        <li> <span><img src="images/union.svg" /></span> Оптимизируем процессы</li>
                        <li> <span><img src="images/union2.svg" /></span> Внедрим инновации</li>
                        <li> <span><img src="images/union3.svg" /></span> Укрепим позиции</li>
                    </ul>
                    <p>Давайте вместе сделаем <br/> ваш бизнес еще более успешным!</p>
                </div>
                <button className={ `${styles.button} ${styles.buttonMob}`  } >РАССКАЖИТЕ НАМ</button>
                <div  className={`${styles.card} ${styles.cardTwo}`}>
                    <div  className={`${styles.cardTitleWrap}`} >
                        <h2> <b>У ВАС ЕСТЬ</b>  НЕРЕАЛИЗОВАННАЯ ИДЕЯ? <span>→</span> </h2>
                    </div>
                    <p>
                        <span>Каждая великая идея заслуживает реализации.</span> Мы готовы поддержать вас
                        на всех этапах – от разработки концепции до создания готового
                        продукта.
                    </p>
                    <div className={styles.process}>
                        <div>
                        <span><img src="/images/Union4.svg" /></span>
                        <span className={styles.arrow}>→</span>
                        <span><img src="/images/Union5.svg" /></span>
                    </div>

                    </div>
                    <div className={styles.hr} >
                        <span></span>
                        <hr/>
                        <span></span>
                    </div>
                    <p>
                        Давайте превратим ваши задумки в работающий проект, который изменит
                        мир!
                    </p>
                </div>
                <button className={ `${styles.button} ${styles.buttonMob}`  }>РАССКАЖИТЕ НАМ</button>
            </div>
            <div className={styles.buttonWrapp} >
                <button className={styles.button}>РАССКАЖИТЕ НАМ</button>
            </div>
        </section>


    )
}

export default Buisnes
