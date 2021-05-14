import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import content from './content.json'

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

            <div>

                {
                    data.map((languages, idx) => (
                        <div key={idx}>
                            <h2 className={styles.subtitle}>{languages.language}</h2>
                            <div className={styles.cards}>
                                {
                                    languages.details.map((details, idx) => (
                                        Card(details, idx)
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }

                <h2 className={styles.subtitle}>
                    To be continued...
                </h2>
            </div>
        </div>
    )
}

function Card({ link, project, description }, idx) {
    return (  
        <div className={styles.card} key={project}>
            <a href={link} target="_blank">
                {/* <Image src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
                <div>
                    <h4>
                        <b>{project}</b>
                    </h4>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}