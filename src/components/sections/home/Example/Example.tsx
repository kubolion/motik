import Link from "next/link"
import Image from "next/image"
import styles from "./Example.module.scss"


const Example = () => {
    return (

        <section className={`${styles.container} container`} >

            <div><h3>Наши концепты</h3></div>
            <div className={styles.exampleLists}>

                <div className={styles.exampleList}>
                    <img src='/images/example.jpg'/>
                    <div className={styles.buttonWrapp}>
                        <button className={styles.button}>
                            <span className={styles.number}>/01</span> Современные <br/> технологии
                        </button>
                        <span className={styles.arrow}> <i>смотреть</i>  →</span>
                    </div>
                </div>
                <div className={styles.exampleList}>
                    <img src='/images/example.jpg'/>
                    <div className={styles.buttonWrapp}>
                        <button className={styles.button}>
                            <span className={styles.number}>/01</span> Современные <br/> технологии
                        </button>
                        <span className={styles.arrow}> <i>смотреть</i>  →</span>
                    </div>
                </div>
                <div className={styles.exampleList}>
                    <img src='/images/example.jpg'/>
                    <div className={styles.buttonWrapp}>
                        <button className={styles.button}>
                            <span className={styles.number}>/01</span> Современные <br/> технологии
                        </button>
                        <span className={styles.arrow}> <i>смотреть</i>  →</span>
                    </div>
                </div>
                <div className={styles.exampleList}>
                    <img src='/images/example.jpg'/>
                    <div className={styles.buttonWrapp}>
                        <button className={styles.button}>
                            <span className={styles.number}>/01</span> Современные <br/> технологии
                        </button>
                        <span className={styles.arrow}> <i>смотреть</i>  →</span>
                    </div>
                </div>
                <div className={styles.exampleList}>
                    <img src='/images/example.jpg'/>
                    <div className={styles.buttonWrapp}>
                        <button className={styles.button}>
                            <span className={styles.number}>/01</span> Современные <br/> технологии
                        </button>
                        <span className={styles.arrow}> <i>смотреть</i>  →</span>
                    </div>
                </div>
                <div className={styles.exampleList}>
                    <img src='/images/example.jpg'/>
                    <div className={styles.buttonWrapp}>
                        <button className={styles.button}>
                            <span className={styles.number}>/01</span> Современные <br/> технологии
                        </button>
                        <span className={styles.arrow}> <i>смотреть</i>  →</span>
                    </div>
                </div>

            </div>


        </section>

    )
}
export default Example