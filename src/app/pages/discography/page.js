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
        <h1><b>Discography The Jackson Five</b></h1>
      </main>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="fs-5">
            <p>
              <br></br>
              Die Jackson Five gehörten zu den erfolgreichsten und einflussreichsten Musikgruppen der späten 1960er- und 1970er-Jahre. Zwischen 1969 und 1975 veröffentlichten sie insgesamt neun Studioalben beim Label Motown Records. Ihr Debütalbum Diana Ross Presents The Jackson 5 erschien 1969 und stellte die fünf Brüder Jackie, Tito, Jermaine, Marlon und den damals erst elfjährigen Michael Jackson der Weltöffentlichkeit vor. Das Album enthielt den Welthit „I Want You Back“, der sofort Platz eins der US-Charts erreichte und den Grundstein für den enormen Erfolg der Gruppe legte.
              <br></br>
              <br></br>
              Im Jahr 1970 folgten mit ABC und Third Album gleich zwei weitere Studioalben, die den Erfolg der Jackson Five weiter ausbauten. Besonders das Album ABC war kommerziell sehr erfolgreich und enthielt bekannte Songs wie „ABC“, „The Love You Save“ und „I’ll Be There“. Diese Lieder erreichten ebenfalls Spitzenplätze in den Charts und machten die Jackson Five zur ersten Band, deren erste vier Singles direkt Platz eins der US-Billboard-Charts erreichten. Das Third Album festigte ihren Ruf als junge, dynamische Pop- und Soulgruppe mit eingängigen Melodien und energiegeladenen Gesangsleistungen.
              <br></br>
              <br></br>
              1971 erschien das Album Maybe Tomorrow, das musikalisch etwas reifer klang und zeigte, dass sich die Band weiterentwickelte. Im darauffolgenden Jahr veröffentlichten sie Lookin’ Through the Windows (1972), ein Album, das gesellschaftlichere Themen aufgriff und den musikalischen Wandel innerhalb der Gruppe widerspiegelte. Mit Skywriter (1973) und G.I.T.: Get It Together (1973) experimentierten die Jackson Five stärker mit Funk- und Soul-Elementen, die dem Zeitgeist der frühen 1970er-Jahre entsprachen.
              <br></br>
              <br></br>
              Ein weiterer Höhepunkt ihrer Discography war das Album Dancing Machine aus dem Jahr 1974. Der gleichnamige Song wurde besonders durch Michael Jacksons legendären „Robot Dance“ bekannt und gilt bis heute als eines der ikonischsten Lieder der Gruppe. Ihr letztes Studioalbum bei Motown, Moving Violation (1975), markierte das Ende einer wichtigen Phase ihrer Karriere, bevor sie später als The Jacksons bei einem anderen Label weitermachten.
              <br></br>
              <br></br>
              Neben den Studioalben veröffentlichten die Jackson Five auch Live-Alben, darunter Live! (1971), das ihre energiegeladenen Bühnenauftritte dokumentierte. Zusätzlich erschienen zahlreiche Kompilationsalben, die ihre größten Hits zusammenfassten und den langfristigen Erfolg ihrer Musik unterstrichen. Insgesamt trug die Discography der Jackson Five maßgeblich dazu bei, Pop-, Soul- und Funkmusik weltweit zu prägen und Michael Jacksons spätere Solokarriere vorzubereiten.
            </p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
   