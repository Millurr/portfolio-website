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
      </main>
    </div>
  )
}

export default About;
