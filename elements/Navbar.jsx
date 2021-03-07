import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href="/">
                    <p role="button" className="navbar-brand">Tramitero</p>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link href="/">
                            <p role="button" className="nav-link mb-0 active">Inicio</p>
                        </Link>
                        <Link href="#">
                            <p role="button" className="nav-link mb-0">Anses</p>
                        </Link>
                        <Link href="#">
                            <p role="button" className="nav-link mb-0">Afip</p>
                        </Link>
                        <Link href="#">
                            <p role="button" className="nav-link mb-0">Dnrpa</p>
                        </Link>
                        <Link href="#">
                            <p role="button" className="nav-link mb-0">Renaper</p>
                        </Link>
                        <Link href="#">
                            <p role="button" className="nav-link mb-0">Noticias</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;