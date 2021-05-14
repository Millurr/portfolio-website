import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import content from './content.json'

interface Projects {
    language: string;
    details: {
        project: string,
        description: string,
        link: string
    }[];
}

export default function Home(): JSX.Element {
    let data: Projects[] = content.content;

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
                    data.map((languages, idx: number) => (
                        <div key={idx}>
                            <h2 className={styles.subtitle}>{languages.language}</h2>
                            <div className={styles.cards}>
                                {
                                    languages.details.map((details, idx: number) => (
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

const Card = ({ link, project, description }, idx: number) => {
    return (  
        <div className={styles.card} key={idx}>
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