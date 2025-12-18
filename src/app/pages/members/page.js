import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

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
            Contact
          </Link>
        </div>
      </nav>

      <main className="container text-center mt-5">
        <h1>
          <b>Members of The Jackson Five</b>
        </h1>
        <br />
        <br />
      </main>

      <div className="container mt-4">
        <div className="row align-items-center mb-5">
          <div className="col-md-8">
            <h2>Member 1: Jackie Jackson</h2>
            <p>
              Jackie Jackson, mit bürgerlichem Namen Sigmund Esco Jackson, wurde
              am 4. Mai 1951 in Gary, Indiana, geboren. Er ist das älteste
              Mitglied der Jackson-Familie und Gründungsmitglied der Musikgruppe
              The Jackson Five. Jackie spielte eine wichtige Rolle in der Band,
              sowohl als Sänger als auch als Tänzer, und war besonders für seine
              Bühnenpräsenz bekannt.
              <br />
              <br />
              In den frühen Jahren der Jackson Five übernahm Jackie häufig Lead-
              oder Background-Gesang und unterstützte seine jüngeren Brüder,
              insbesondere Michael Jackson. Neben dem Gesang trug er maßgeblich
              zu den choreografierten Tanzauftritten der Gruppe bei, die ein
              Markenzeichen der Band wurden. Obwohl Michael oft im Mittelpunkt
              stand, war Jackie ein wichtiger Stabilitätsfaktor innerhalb der
              Gruppe.
              <br />
              <br />
              Nach der Zeit bei Motown setzte Jackie seine Karriere mit seinen
              Brüdern unter dem Namen The Jacksons fort. Zusätzlich
              veröffentlichte er Anfang der 1980er-Jahre zwei Soloalben,
              darunter Jackie Jackson (1973) und Be the One (1989). Auch nach
              dem Höhepunkt des Erfolgs blieb Jackie eng mit der Musik verbunden
              und trat bei verschiedenen Reunion-Tourneen der Jacksons auf.
              <br />
              <br />
              Jackie Jackson gilt als bodenständiges und engagiertes Mitglied
              der Jackson-Familie, das wesentlich zum Erfolg und Zusammenhalt
              der Gruppe beigetragen hat.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <Image
              src="/assets/members/jackie-jackson_blawhi.jpg"
              alt="Jackson Five Band Photo"
              width={450}
              height={0}
              style={{ height: "auto" }}
              className="mx-auto d-block"
            />
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-8">
            <Image
              src="/assets/members/jermaine-jackson_blawhi.jpg"
              alt="Jackson Five Band Photo"
              width={700}
              height={0}
              style={{ height: "auto" }}
              className="mx-auto d-block"
            />
          </div>

          <div className="col-md-4 text-center">
            <h2>Member 2: Jermaine Jackson</h2>
            <p>
              Jermaine Jackson wurde am 11. Dezember 1954 in Gary, Indiana,
              geboren und ist ein US-amerikanischer Sänger, Bassist und
              Songwriter. Er war eines der Gründungsmitglieder der Jackson Five
              und übernahm in der Gruppe häufig Lead- und Background-Gesang.
              Besonders auffällig war seine warme, soulige Stimme, die viele
              Songs der Band prägte.
              <br />
              <br />
              Während der frühen Erfolge der Jackson Five bei Motown sang
              Jermaine wichtige Gesangsparts und spielte den E-Bass, was ihn von
              seinen Brüdern abhob. Als die Gruppe 1975 Motown verließ,
              entschied sich Jermaine zunächst zu bleiben, da er mit Berry
              Gordys Tochter Hazel Gordy verheiratet war. Dadurch begann er eine
              Solokarriere, während seine Brüder unter dem Namen The Jacksons
              weitermachten.
              <br />
              <br />
              In den späten 1970er- und 1980er-Jahren feierte Jermaine als
              Solokünstler Erfolge mit Songs wie „Let’s Get Serious“, „Do What
              You Do“ und „Dynamite“. Später kehrte er wieder zu seinen Brüdern
              zurück und nahm an mehreren Reunion-Projekten und Tourneen teil.
              <br />
              <br />
              Jermaine Jackson gilt als ein vielseitiger Künstler, der sowohl
              innerhalb der Jackson Five als auch als Solosänger großen Einfluss
              hatte und wesentlich zur musikalischen Vielfalt der Familie
              Jackson beitrug.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-4 text-center">
            <Image
              src="/assets/members/marlon-jackson_blawhi.jpg"
              alt="Jackson Five Band Photo"
              width={400}
              height={0}
              style={{ height: "auto" }}
              className="mx-auto d-block"
            />
          </div>

          <div className="col-md-8">
            <h2>Member 3: Marlon Jackson</h2>
            <p>
              Marlon Jackson wurde am 12. März 1957 in Gary, Indiana, geboren
              und ist ein US-amerikanischer Sänger, Tänzer und Entertainer. Er
              ist eines der Gründungsmitglieder der Jackson Five und besonders
              für seine Energie, Präzision und Ausdrucksstärke im Tanz bekannt.
              Schon in jungen Jahren spielte Marlon eine wichtige Rolle in den
              choreografierten Bühnenauftritten der Gruppe.
              <br />
              <br />
              Innerhalb der Jackson Five übernahm Marlon vor allem
              Background-Gesang, unterstützte aber auch gelegentlich den
              Lead-Gesang. Gemeinsam mit seinen Brüdern trug er maßgeblich dazu
              bei, den charakteristischen Stil der Band aus Gesang, Tanz und
              Showelementen zu formen. Seine exakten Bewegungen und seine
              Bühnenpräsenz machten ihn zu einem wichtigen Bestandteil der
              Live-Auftritte.
              <br />
              <br />
              Nach der Motown-Zeit setzte Marlon seine Karriere mit seinen
              Brüdern unter dem Namen The Jacksons fort. 1987 veröffentlichte er
              sein einziges Soloalbum „Baby Tonight“, das den Hit „Don’t Go“
              enthielt. Neben der Musik engagierte sich Marlon später auch stark
              in sozialen und humanitären Projekten, insbesondere im Bereich
              Jugendförderung und Bildung.
              <br />
              <br />
              Marlon Jackson gilt als ein engagiertes und kreatives Mitglied der
              Jackson-Familie, dessen tänzerisches Talent und Einsatz wesentlich
              zum Erfolg der Jackson Five beitrugen.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-4 text-center">
            <h2>Member 4: Michael Jackson</h2>
            <p>
              Michael Jackson, mit vollem Namen Michael Joseph Jackson, wurde am
              29. August 1958 in Gary, Indiana, geboren und gilt als einer der
              bedeutendsten Künstler der Musikgeschichte. Er wurde weltweit als
              „King of Pop“ bekannt. Seine Karriere begann bereits im
              Kindesalter als jüngstes Mitglied der Jackson Five, wo er schnell
              durch seine außergewöhnliche Stimme, sein Talent und seine
              Bühnenpräsenz auffiel.
              <br />
              <br />
              Bei den Jackson Five übernahm Michael schon sehr früh den
              Leadgesang und prägte viele der größten Hits der Gruppe, darunter
              „I Want You Back“, „ABC“ und „I’ll Be There“. Sein natürliches
              Charisma und seine emotionale Stimme machten ihn zum Mittelpunkt
              der Band und legten den Grundstein für seine spätere Solokarriere.
              <br />
              <br />
              Ab den 1970er-Jahren startete Michael Jackson eine äußerst
              erfolgreiche Solokarriere. Mit Alben wie „Off the Wall“ (1979),
              „Thriller“ (1982), „Bad“ (1987) und „Dangerous“ (1991) erreichte
              er weltweiten Ruhm. Besonders Thriller gilt bis heute als das
              meistverkaufte Album aller Zeiten. Neben seiner Musik
              revolutionierte Michael Jackson auch das Musikvideo, vor allem mit
              aufwendig produzierten Clips wie „Thriller“, „Billie Jean“ und
              „Beat It“.
              <br />
              <br />
              Michael Jackson war zudem für seine einzigartigen Tanzbewegungen,
              insbesondere den Moonwalk, bekannt. Er beeinflusste Generationen
              von Musikern, Tänzern und Künstlern weltweit. Trotz seines enormen
              Erfolgs war sein Leben von Kontroversen und persönlichen
              Herausforderungen geprägt. Michael Jackson verstarb am 25. Juni
              2009, doch sein musikalisches Erbe lebt bis heute weiter.
            </p>
          </div>

          <div className="col-md-8">
            <Image
              src="/assets/members/micheal-jackson_blawhi.jpg"
              alt="Jackson Five Band Photo"
              width={700}
              height={0}
              style={{ height: "auto" }}
              className="mx-auto d-block"
            />
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-8">
            <Image
              src="/assets/members/tito-jackson_blawhi.jpg"
              alt="Jackson Five Band Photo"
              width={750}
              height={0}
              style={{ height: "auto" }}
              className="mx-auto d-block"
            />
          </div>

          <div className="col-md-4 text-center">
            <h2>Member 5: Tito Jackson</h2>
            <p>
              Tito Jackson, mit bürgerlichem Namen Toriano Adaryll Jackson,
              wurde am 15. Oktober 1953 in Gary, Indiana, geboren. Er war
              Gründungsmitglied der Jackson Five und vor allem als Gitarrist der
              Gruppe bekannt. Tito spielte eine wichtige Rolle im musikalischen
              Fundament der Band und trug wesentlich zu ihrem unverwechselbaren
              Sound bei.
              <br />
              <br />
              Innerhalb der Jackson Five übernahm Tito hauptsächlich
              Background-Gesang, während er sich instrumental auf die Gitarre
              konzentrierte. Sein rhythmisches Gitarrenspiel ergänzte den
              typischen Motown-Sound und unterstützte die eingängigen Melodien
              der Band. Obwohl er weniger im Vordergrund stand als Michael
              Jackson, war Tito ein wichtiger Bestandteil des Erfolgs der
              Gruppe.
              <br />
              <br />
              Nach der Motown-Zeit setzte Tito seine Karriere mit seinen Brüdern
              unter dem Namen The Jacksons fort. Später widmete er sich
              verstärkt dem Blues, was zu mehreren Solo-Projekten führte. In den
              2000er-Jahren veröffentlichte er eigene Alben und trat
              international als Bluesmusiker auf, wodurch er sich auch außerhalb
              des Familiennamens einen eigenen musikalischen Stil aufbaute.
              <br />
              <br />
              Tito Jackson gilt als bodenständiger und leidenschaftlicher
              Musiker, dessen Gitarrenspiel und musikalische Hingabe maßgeblich
              zum Erfolg der Jackson Five beitrugen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
