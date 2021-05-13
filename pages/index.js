import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import content from './content.json'
import _ from 'lodash'

export default function Home() {
    let data = content.data;

    return (
        <div>
            <Head>
                <title>Josh Miller | Portfolio</title>
                <meta
                    name="description"
                    content="Portfolio for my current and previous projects."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <body>

                {
                    data.map((languages) => (
                        <>
                            <h2 className={styles.subtitle}>{languages.language}</h2>
                            <div className={styles.cards}>
                                {
                                    languages.details.map((details) => (
                                        <div className={styles.card}>
                                            <a href={details.link} target="_blank">
                                                {/* <Image src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
                                                <div>
                                                    <h4>
                                                        <b>{details.project}</b>
                                                    </h4>
                                                    <p>{details.description}</p>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }

                <h2 className={styles.subtitle}>
                    To be continued...
                </h2>
            </body>
        </div>
    )
}
