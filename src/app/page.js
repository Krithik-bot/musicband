import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <nav className={styles.navbar}>
      <h2 className={styles.bandname}>Wu-Tang Clan</h2>
      div
    
      <button className={styles.navbutton}>Discography</button>
      <button className={styles.navbutton}>Music Albums</button>
      <button className={styles.navbutton}>About Me</button>
    </nav>
  

    
    <main className={styles.main}>
      <h1>Welcome to the Band-Website</h1>
      <p>This is the home page of my awesome Next.js application.</p>
      <Image
        src="/nextjs-logo.png"
        alt="Next.js Logo"
        width={200}
        height={100}
      />
    </main>
    </>
  );
}