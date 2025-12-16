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

        <div className="row align-items-center mb-5">
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

        <div className="row align-items-center mb-5">
          <div className="col-md-4">
            <Image
              src="/assets/albums/Album2_1970.jpg"   
              alt="The Jackson Five"
              width={400}
              height={400}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-8">
            <h2>ABC (1970)</h2>
            <p>
            ABC ist das zweite Studioalbum der Jackson Five und wurde 1970 von Motown Records veröffentlicht. Das Album festigte den Erfolg der fünf Brüder Jackie, Tito, Jermaine, Marlon und Michael Jackson, nachdem ihr Debütalbum Diana Ross Presents The Jackson 5 bereits für weltweite Bekanntheit gesorgt hatte.
            <br/>
            <br/>
            Der Titelsong „ABC“ wurde zu einem der größten Hits der Gruppe und erreichte Platz eins der US-Billboard-Charts. Weitere bekannte Songs auf dem Album sind „The Love You Save“, „Never Can Say Goodbye“ und „I Found That Girl“, die allesamt die Mischung aus Soul, Pop und eingängigen Melodien zeigen, für die die Jackson Five berühmt waren.
            <br/>
            <br/>
            Besonders Michael Jacksons Gesang stach erneut hervor und zeigte seine außergewöhnliche Stimme und Bühnenpräsenz schon in jungen Jahren. ABC gilt als eines der wichtigsten Alben der frühen 1970er-Jahre, da es nicht nur die musikalische Vielseitigkeit der Gruppe zeigte, sondern auch dazu beitrug, die Jackson Five als führende Pop- und Soulband ihrer Zeit zu etablieren.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-4">
            <Image
              src="/assets/albums/Album3_1970.jpg"   
              alt="The Jackson Five"
              width={400}
              height={400}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-8">
            <h2>Third Album (1970)</h2>
            <p>
            Third Album ist das dritte Studioalbum der Jackson Five und erschien 1970 bei Motown Records. Nach dem Erfolg ihrer beiden ersten Alben Diana Ross Presents The Jackson 5 und ABC festigte dieses Album die Popularität der fünf Brüder Jackie, Tito, Jermaine, Marlon und Michael Jackson weiter.
            <br/>
            <br/>
            Das Album enthält Hits wie „I’ll Be There“, der zu einem der bekanntesten Songs der Gruppe wurde und Platz eins der US-Billboard-Charts erreichte. Weitere bekannte Tracks sind „Can You Feel It“ und „Mama’s Pearl“, die die Mischung aus energiegeladenem Soul, Pop und eingängigen Melodien zeigen, für die die Jackson Five berühmt waren.
            <br/>
            <br/>
            Third Album demonstriert die musikalische Reife der Gruppe trotz ihres jungen Alters, und Michael Jacksons Gesang sticht erneut besonders hervor. Das Album gilt als eines der wichtigsten Werke der Jackson Five, da es ihre Position als führende Pop- und Soulband der frühen 1970er-Jahre festigte und die Grundlage für ihre spätere weltweite Karriere legte.            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-4">
            <Image
              src="/assets/albums/Album4_1971_richtig.jpg"   
              alt="The Jackson Five"
              width={400}
              height={400}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-8">
            <h2>Maybe Tomorrow (1971)</h2>
            <p>
            Maybe Tomorrow ist das vierte Studioalbum der Jackson Five und wurde 1971 von Motown Records veröffentlicht. Mit diesem Album setzten die fünf Brüder Jackie, Tito, Jermaine, Marlon und Michael Jackson ihren Erfolg der frühen 1970er-Jahre fort und zeigten gleichzeitig eine musikalische Weiterentwicklung.
            <br/>
            <br/>
            Das Album enthält bekannte Songs wie „Maybe Tomorrow“, „Sugar Daddy“ und „Never Can Say Goodbye“, die die typischen Stärken der Gruppe – eingängige Melodien, mitreißende Rhythmen und harmonischen Gesang – perfekt kombinieren. Besonders Michael Jacksons Stimme sticht erneut hervor und zeigt seine Fähigkeit, sowohl kraftvolle als auch gefühlvolle Passagen zu singen.
            <br/>
            <br/>
            Musikalisch bewegt sich Maybe Tomorrow zwischen Pop, Soul und Motown-typischem R&B und enthält sowohl energiegeladene Tanznummern als auch gefühlvolle Balladen. Das Album festigte die Jackson Five als eine der führenden Pop- und Soulgruppen der Zeit und legte den Grundstein für viele ihrer späteren Erfolge.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-4">
            <Image
              src="/assets/albums/Album5_1972.jpg"   
              alt="The Jackson Five"
              width={400}
              height={400}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-8">
            <h2>Lookin’ Through the Windows (1972)</h2>
            <p>
            Lookin’ Through the Windows ist das fünfte Studioalbum der Jackson Five und wurde 1972 von Motown Records veröffentlicht. Mit diesem Album präsentierten die fünf Brüder Jackie, Tito, Jermaine, Marlon und Michael Jackson eine reifere musikalische Richtung und zeigten ihre kontinuierliche Entwicklung als junge Pop- und Soulgruppe.
            <br/>
            <br/>
            Das Album enthält bekannte Songs wie „Lookin’ Through the Windows“, „Little Bitty Pretty One“ und „Doctor My Eyes“, die eine Mischung aus gefühlvollen Balladen und energiegeladenen Pop-Songs bieten. Besonders Michael Jacksons Gesang fällt durch seine emotionale Tiefe und technische Präzision auf, während die harmonischen Stimmen seiner Brüder den typischen Jackson Five-Sound prägen.
            <br/>
            <br/>
            Musikalisch verbindet Lookin’ Through the Windows eingängige Melodien, rhythmische Soul-Elemente und den charakteristischen Motown-Sound. Das Album festigte die Position der Jackson Five als führende Pop- und Soulgruppe der frühen 1970er-Jahre und zeigte gleichzeitig ihre Fähigkeit, musikalisch zu wachsen und ihr Repertoire zu erweitern.       
            </p>
          </div>
        </div>

      
      </div>


      
    </>
  );
}
   