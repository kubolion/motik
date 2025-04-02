"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Technology.module.scss";
import techData from "./techData";

const Technology = () => {
    const [selectedTech, setSelectedTech] = useState(techData[0]); // Первая технология по умолчанию

    return (
        <section className={`${styles.container} container`}>
            <div className={styles.wrapTech}>
                <h3>ТЕХНОЛОГИИ</h3>
                <div>
                    <ul>
                        {techData.map((tech, index) => (
                            <span key={index} className={styles.techItem}>
                <span
                    className={`${styles.arrow} ${selectedTech.name === tech.name ? styles.activeArrow : ""}`}
                >
                  → {/* Стрелка будет менять цвет, если элемент выбран */}
                </span>
                <li
                    onClick={() => setSelectedTech(tech)}
                    className={selectedTech.name === tech.name ? styles.activeTech : ""}
                >
                  <span>
                    <Image src={tech.icon} alt={tech.name} width={20} height={20} />
                  </span>
                    {tech.name}
                </li>
              </span>
                        ))}
                    </ul>
                    <div>
                        <p className={styles.infoTech}>{selectedTech.infoTech}</p>
                        <p className={styles.infoTechText}>{selectedTech.infoTechText}</p>
                    </div>
                </div>
            </div>
            <div className={styles.reactBg}>
                <div>
                    <div>
                        <p>{selectedTech.infoTech}</p>
                    </div>
                    <Image src={selectedTech.icon} alt={selectedTech.infoTech} width={40} height={40} />
                </div>
            </div>
        </section>
    );
};

export default Technology;
