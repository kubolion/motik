// About.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./About.module.scss";
import { aboutContent } from "./aboutData";  // Импорт данных

const About = () => {
    return (
        <section className={`${styles.container} container`}>
            <div className={styles.aboutWrap}>
                <div className={styles.aboutBgWhite}></div>

                {aboutContent.map((card, index) => (
                    <div key={index} className={styles.aboutCard}>
                        <div className={styles.aboutCardText}>
                            <p>{card.text}</p>
                            <div className={styles.buttonWrapp}>
                                <span className={styles.arrow}>→</span>
                                <button className={styles.button}>
                                    <span className={styles.number}>{card.buttonText.split(" ")[0]}</span> {card.buttonText.split(" ")[1]}
                                </button>
                            </div>
                        </div>
                        <img src={card.imageSrc} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
