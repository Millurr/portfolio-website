import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Miller | About</title>
        <meta name="description" content="Some intersting things about myself." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About me
        </h1>
      </main>
    </div>
  )
}
