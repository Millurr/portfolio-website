import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import sweetStyles from '../styles/SweetAlert.module.css';
import content from './content.json';
import swal from '@sweetalert/with-react';
import { SweetAlert } from '../components/SweetAlert';

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
    const showSwal = (title: string, desc: string, imgs: {img: string}[], lnk: string) => {
        swal({
            className: sweetStyles.container,
            buttons: {
                cancel: {
                    text: "Close",
                    value: true,
                    visible: true,
                    className: sweetStyles.button,
                    closeModal: true,
                  }
              },
            content:<SweetAlert title={title} description={desc} link={lnk} imgs={imgs}/>
        })
    }
    
    return (  
        <div className={styles.card} key={idx} onClick={() => showSwal(project, description, images, link)}>
                {/* <Image src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
                <div>
                    <h4>
                        <b>{project}</b>
                    </h4>
                    {/* <p>{description}</p> */}
                </div>
        </div>
    )
}

export default Home;