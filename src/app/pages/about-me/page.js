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
            Contact
          </Link>
        </div>
      </nav>

      <main className="container text-center mt-5">
        <h1>
          <b>Contact Page</b>
        </h1>
        <br />
        <br />
      </main>

      <div className="container">
        <div className="row align-items-center mt-4">
          <div className="col-md-6 text-md-start text-center">
            <p className="fs-5">
              Vorname: Krithik
              <br />
              <br />
              Nachname: Kamesh
              <br />
              <br />
              E-Mail: krithik.kamesh@lernende.bms-w.ch
              <br />
              <br />
              Schule: BBW
              <br />
              <br />
              Klasse: 5IA25b
            </p>
          </div>

          <div className="col-md-6">
            <Image
              src="/assets/BBW_StudentID.jpg"
              alt="Student ID Photo"
              width={250}
              height={0}
              style={{ height: "auto" }}
              className="ms-md-auto d-block mx-auto border p-1 bg-dark"
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-left">
            <br />
            <br />
            <h3>Kontaktformular/Rückmeldung</h3>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Ihre Nachricht hier..."
            ></textarea>
            <br />
            <button className="btn btn-primary">Absenden</button>
          </div>
        </div>
      </div>
    </>
  );
}
