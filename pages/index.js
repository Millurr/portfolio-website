import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Miller | Portfolio</title>
        <meta name="description" content="Portfolio for my current and previous projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <h1 className={styles.title}>
          My Portfolio
        </h1>
      </body>
    </div>
  )
}
