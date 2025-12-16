import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <h2 className="navbar-brand mb-0">The Jackson Five</h2>

        <div className="ms-auto d-flex gap-2">
          <Link href="../.." className="btn btn-outline-light">
            Home Page
          </Link>

          <Link href="/pages/discography" className="btn btn-outline-light">
            Discography
          </Link>

          <Link href="/pages/members" className="btn btn-outline-light">
            Band Members
          </Link>

          <Link href="/pages/music-albums" className="btn btn-outline-light">
            Music Albums
          </Link>

          <Link href="/pages/about-me" className="btn btn-outline-light">
            About Me
          </Link>
        </div>
      </nav>
    </>
  );

   
      <main className={styles.main}>
        <h1><u>Members of the Jackson Five</u></h1>
        <br/>
        <br/>       
        <br/>
        <h3>Member 1: Jackie Jackson</h3>

        <Image
          src="/assets/jackie-jackson_blawhi.jpg"
          alt="The Jackson Five"
          width={600}
          height= {0}
          style={{ height: "auto" }}
          className={styles.leftImage}
        />


        <br/>
        <br/>
        <h3>Member 2: Tito Jackson</h3>
        <Image
          src="/assets/tito-jackson_blawhi.jpg"
          alt="The Jackson Five"
          width={600}
          height= {0}
          style={{ height: "auto" }}
          className={styles.leftImage}
        />
        <br/>
        <br/>
        <h3>Member 3: Jermaine Jackson</h3>
        <Image
          src="/assets/jermaine-jackson_blawhi.jpg"
          alt="The Jackson Five"
          width={600}
          height= {0}
          style={{ height: "auto" }}
          className={styles.leftImage}
        />
        <br/>
        <br/>
        <h3>Member 4: Marlon Jackson</h3>
        <Image
          src="/assets/marlon-jackson_blawhi.jpg"
          alt="The Jackson Five" 
          width={600}
          height= {0}
          style={{ height: "auto" }}
          className={styles.leftImage}
        />
        <br/>
        <br/>
        <h3>Member 5: Michael Jackson</h3>
        <Image
          src="/assets/micheal-jackson_blawhi.jpg"
          alt="The Jackson Five"
          width={600}
          height= {0}
          style={{ height: "auto" }}
          className={styles.leftImage}
        />
      </main>
}
  

