import Image from 'next/image';
import Link from 'next/link';
import applogo from '../assets/applogo.jpg';
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image src={applogo} alt="applogo" width="128" height="48"/>
          </Link>
          <div className="collapse navbar-collapse d-flex w-100 justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 w-25">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              
            </ul>
            <form className="d-flex w-50 justify-content-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search songs, playlists, singers....."
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0 w-25 justify-content-end">
              <li className="nav-item">
                <Link className="nav-link active text-white login-button" aria-current="page" href="/login">
                  Login
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
