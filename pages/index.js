import Head from 'next/head'
import Image from "next/image";
import styles from '../styles/Home.module.css'

// Laftel
import laftel from 'laftel.js'

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Home({ animes }) {
    return (
        <div>
            <Head>
                <title>Annumity</title>
                <meta name="Annumity" content="Anime WebSite" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={ styles.title }>Annumity</div>

            <div className={ styles.searchBar }>
                <input type="search" className={ styles.SearchT } placeholder="Search"/>
                <span id="search-addon">
                    <FontAwesomeIcon icon={faSearch}/>
                </span>
            </div>

            {animes.map((anime, i) => (
                <div key={i}>
                    <div className={ styles.grid }>
                        <div className={ styles.card }>
                            <Image className={styles.cardImg}
                                src={anime.img}
                                alt="Img from Laftel"
                                width={169+20}
                                height={225+20}
                            />

                            <div className={ styles.animeText }>
                                <h2>{ anime.name }</h2>
                                <div className={ styles.genresArr }>
                                    <h4>{ anime.genres[0]+", " }</h4>
                                    <h4>{ anime.genres[1]+", " }</h4>
                                    <h4>{ anime.genres[2] }</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export async function getServerSideProps () {
    const search = await laftel.search('코노스바')

    console.log(search.results)

    return {
        props: { animes: search.results }
    }
}