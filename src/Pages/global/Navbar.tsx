import styles from "./Navbar.module.css"

export default function Navbar(){
    return(
        <div className={`${styles.navbox} --dds-flex-center`}>
            <section>
                <h1>UR Sports</h1>
            </section>
            <section>
                <ul className={`--dds-flex-row`}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </section>
        </div>
    )
}