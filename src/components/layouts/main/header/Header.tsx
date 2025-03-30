'use client'

import styles from './Header.module.scss'
import Image from 'next/image'
import Link from "next/link";
export function Header() {
  return (
      <header className={styles.header}>
        <div className={`${styles.wrapper} container`}>
            <Image src="/images/logo.svg" alt="logo" width={150} height={50} priority />
            <nav>
                <ul className={styles.navList}>
                    <li>услуги</li>
                    <li>портфолио</li>
                    <li>сотрудничество</li>
                    <li>контакты</li>
                </ul>
            </nav>
            <div className={styles.wrapPhone}>
                <div>
                    <Link href="tel:0800123123">
                        <p>0 800 123 123</p>
                    </Link>
                    <Link href="mailto:motikgroup@gmail.com">
                        <p>motikgroup@gmail.com</p>
                    </Link>
                </div>
                <div className={styles.wrapBtn}>
                    <button>СВЯЗАТЬСЯ С НАМИ</button>
                    <div>
                        <p>ru</p>
                    </div>
                </div>
            </div>
        </div>
      </header>
  )
}
