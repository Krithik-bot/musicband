import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <h1><b>Welcome to the Band-Website</b></h1>
     

        <p className="mt-3">
          The Jackson Five war eine Musikgruppe in den 1960/70er Jahre aus fünf
          Brüdern: Jackie, Tito, Jermaine, Marlon und Michael Jackson.
        </p>
      </main>

      <div className="row justify-content-center mt-3 me-5">
          <div className="col-md-6 col-lg-5">
            <Image
              src="/assets/The-Jackson-5-1970-performing.webp"
              alt="Jackson Five Band Photo"
              width={700}
              height={0}
              style={{ height: "auto" }}
            />
          </div>
        </div>


    </>
  );
}
