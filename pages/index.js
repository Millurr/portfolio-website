import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
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
                {/* <h1 className={styles.title}>
                    My Portfolio
                </h1> */}

                <h2 className={styles.subtitle}>
                    Javascript
                </h2>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <a href="https://github.com/victor-betancourt/reunion-lake" target="_blank">
                            {/* <Image src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
                            <div>
                                <h4>
                                    <b>Reunion Lake App</b>
                                </h4>
                                <p>Built using
                                    <b> React Native </b>
                                    &
                                    <b> Firebase</b>
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className={styles.card}>
                        {/* <Image src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
                        <a href="https://www.jmcrafting.com/" target="_blank">
                            <div>
                                <h4>
                                    <b>JM Crafting</b>
                                </h4>
                                <p>Built using
                                    <b> Reactjs </b>
                                    &
                                    <b> MongoDB</b>
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className={styles.card}>
                        <a href="https://github.com/Millurr/portfolio-website" target="_blank">
                            <div>
                                <h4>
                                    <b>This Website</b>
                                </h4>
                                <p>Built using
                                    <b> Nextjs</b>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                <h2 className={styles.subtitle}>
                    Dart
                </h2>

                <div className={styles.cards}>

                    <div className={styles.card}>
                        <a href="https://github.com/Millurr/pump_tracker" target="_blank">
                            <div>
                                <h4>
                                    <b>Pump Tracker</b>
                                </h4>
                                <p>Built using
                                    <b> Flutter </b>
                                    &
                                    <b> Firebase</b>
                                </p>
                            </div>
                        </a>
                    </div>

                </div>

                <h2 className={styles.subtitle}>
                    C++
                </h2>

                <div className={styles.cards}>

                    <div className={styles.card}>
                      <a href="https://github.com/Millurr/HangManCpp" target="_blank">
                        <div>
                            <h4>
                                <b>Console Version Hang Man</b>
                            </h4>
                            <p>Built using generic
                                <b> C++</b>
                            </p>
                        </div>
                      </a>
                    </div>

                </div>

                <h2 className={styles.subtitle}>
                    Godot
                </h2>

                <div className={styles.cards}>

                    <div className={styles.card}>
                      <a href="https://github.com/Millurr/PongGodot" target="_blank">
                        <div>
                            <h4>
                                <b>Pong Clone</b>
                            </h4>
                            <p>Built using
                                <b> GDScript</b>
                            </p>
                        </div>
                      </a>
                    </div>

                </div>

                <h2 className={styles.subtitle}>
                    To be continued...
                </h2>
            </body>
        </div>
    )
}
