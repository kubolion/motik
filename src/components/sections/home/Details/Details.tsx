import Link from "next/link"
import Image from "next/image"
import styles from "./Details.module.scss"


const Details = () => {
    return (

        <section className={`${styles.container} container`} >
            <div className={styles.wrapAllDetails} >
               <div className={`${styles.containerDetails}`} >
                   <h3>Как будет выглядеть сотрудничество?</h3>
                   <ul>
                       <li>ВЫ кратко заполняете форму пожеланий</li>
                       <li>ВЫ кратко заполняете форму пожеланий</li>
                       <li>ВЫ кратко заполняете форму пожеланий</li>
                       <li>ВЫ кратко заполняете форму пожеланий</li>
                       <li>ВЫ кратко заполняете форму пожеланий</li>
                       <li>ВЫ кратко заполняете форму пожеланий</li>
                       <li>ВЫ кратко заполняете форму пожеланий</li>
                       <li>ВЫ кратко заполняете форму пожеланий</li>
                   </ul>
               </div>
                <div className={`${styles.containerDetailsForm}`} >
                    <h3>Готовы обсудить детали?</h3>
                    <p>Расскажите немного о вашем проекте. Мы свяжемся в ближайшее время</p>
                    <div className={styles.buttonWrapp} >
                        <button className={styles.button}>Обсудить <span>→</span> </button>
                    </div>
                </div>
            </div>
        </section>

    )


}

export default Details
