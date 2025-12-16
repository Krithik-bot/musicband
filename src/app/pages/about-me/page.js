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
}
   