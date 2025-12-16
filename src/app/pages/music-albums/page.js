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

      <main className="container text-center mt-5">
        <h1><b>Music Albums of The Jackson Five</b></h1>
        <br/>
        <br/>
      </main>


      <div className="container mt-4">
        <div className="row align-items-center">

          <div className="col-md-4">
            <Image
              src="/assets/albums/Album1_1969.jpg"   
              alt="The Jackson Five"
              width={400}
              height={400}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-8">
            <h2>Diana Ross Presents The Jackson 5 (1969)</h2>
            <p>
              Diana Ross Presents The Jackson 5 ist das Debütalbum der Jackson Five und erschien im Jahr 1969 beim Label Motown Records. Das Album markiert den offiziellen Durchbruch der fünf Brüder Jackie, Tito, Jermaine, Marlon und Michael Jackson. Obwohl Diana Ross nicht musikalisch auf dem Album mitwirkte, wurde sie aus Marketinggründen als Präsentierende genannt, da sie zu dieser Zeit einer der größten Stars von Motown war.
              <br/>
              <br/>
              Das Album enthält den weltbekannten Hit „I Want You Back“, der Platz eins der US-Billboard-Charts erreichte und die Jackson Five schlagartig berühmt machte. Weitere bekannte Songs sind „ABC“, „Who’s Lovin’ You“ und „Standing in the Shadows of Love“. Besonders Michael Jacksons außergewöhnliche Stimme stach bereits auf diesem Album hervor und machte ihn zum Mittelpunkt der Gruppe.
              <br/>
              <br/>
              Musikalisch verbindet das Album Soul, Pop und Motown-Sound mit energiegeladenen Rhythmen und eingängigen Melodien. Diana Ross Presents The Jackson 5 gilt als eines der wichtigsten Debütalben der Musikgeschichte und legte den Grundstein für die erfolgreiche Karriere der Jackson Five sowie für Michael Jacksons spätere Solokarriere.
            </p>
          </div>  

        </div>
      </div>
    </>
  );
}
   