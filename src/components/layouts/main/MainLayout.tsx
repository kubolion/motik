import { PropsWithChildren } from 'react'

import { Footer } from '@/components/layouts/main/footer/Footer'
import { Header } from '@/components/layouts/main/header/Header'

import styles from './MainLayout.module.scss'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.wrapper}>
        <Header />
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
