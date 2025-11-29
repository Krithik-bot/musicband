import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>
        <h2 className={styles.bandname}>The Jackson Five</h2>

        <Link href="../..">
          <button className={styles.navbutton}>Home Page</button>
        </Link>

        <Link href="/pages/discography">
          <button className={styles.navbutton}>Discography</button>
        </Link>

        <Link href="/pages/members">
          <button className={styles.navbutton}>Band Members</button>
        </Link>

        <Link href="/pages/music-albums">
          <button className={styles.navbutton}>Music Albums</button>
        </Link>

        <Link href="/pages/about-me">
          <button className={styles.navbutton}>About Me</button>
        </Link>
      </nav>

      <main className={styles.main}>
        <h1>Welcome to the Band-Website</h1>
        <p>This is the home page of my awesome Next.js application.</p>
      </main>
    </>
  );
}
