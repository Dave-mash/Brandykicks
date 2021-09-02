import Link from "next/link";

import styles from '../styles/components/NothingFound.module.css';


const NothingFound = () => (
    <div className={styles.container}>
        <h1>Nothing here yet! <Link href="/">Start shopping?</Link></h1>
    </div>
)

export default NothingFound;