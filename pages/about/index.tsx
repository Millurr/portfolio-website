import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/About.module.css'

const About = () => {
  return (
    <div>
      <Head>
        <title>Josh Miller | About</title>
        <meta name="description" content="Some intersting things about myself." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About me
        </h1>
        <div className={styles.container}>
          <Image className={styles.img} src="/images/IMG_0597.jpg" width={1512/8} height={2016/8}/>
        </div>
        <p className={styles.paragraph}>
        Computer science major with management and customer service experience seeking a
        career in which technology and leadership skills will further organizational goals.
        Additional strengths include communication, analytical skills, managing multiple tasks
        efficiently, and collaborating as part of a team to ensure successful operations,
        processes, and results.
        </p>
      </main>
    </div>
  )
}

export default About;
