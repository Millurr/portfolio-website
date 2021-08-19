import Head from 'next/head';
import styles from '../styles/Home.module.css';
import content from './content.json';

interface Projects {
    language: string;
    details: {
        project: string,
        description: string,
        link: string,
        images: {
            img: string
        }[]
    }[];
}

const Home = (): JSX.Element => {
    let data: Projects[] = content.content;

    return (
        <div>
            <Head>
                <title>Josh Miller | Portfolio</title>
                <meta
                    name="description"
                    content="Portfolio for my current and previous projects."/>
            </Head>

            <div>

                {
                    data.map((languages, idx: number) => (
                        <div key={idx}>
                            <h2 className={styles.subtitle}>{languages.language}</h2>
                            <div className={styles.cards}>
                                {
                                    languages.details.map((details, i: number) => (
                                        Card(details, i)
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

const Card = ({ link, project, description, images }, idx: number): JSX.Element => {
    
    return (  
        <div className={styles.card} key={idx}>
                {/* <Image src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
                <div>
                    <h4>
                        <b>{project}</b>
                    </h4>
                    <p>
                        {description}
                    </p>

                    <a className={styles.cardlink} href={link} target="_blank">Source code</a>
                </div>
        </div>
    )
}

export default Home;