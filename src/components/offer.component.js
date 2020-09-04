import React from "react";
import { Link } from "gatsby";

const homepageOffer = () => (
    <section className="offer">
        <div className="container">
            <h2>Sprawdź w czym mogę Ci pomóc</h2>
            <div className="offer-wrapper">
                <Link to="/oferta/strony-internetowe" className="offer-box">

                    <div className="icon">
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <h3>Strony internetowe</h3>
                    </div>

                    <p>
                        Specjalizuję się w tworzeniu stron opartych o system
                        WordPress oraz JAMstack.
                    </p>
                </Link>

                <Link to="/oferta/sklepy-internetowe" className="offer-box">

                    <div className="icon">
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <h3>Sklepy internetowe</h3>
                    </div>
                    <p>
                        Konfiguracja popularnych systemów E-Commerce dla Twoich
                        potrzeb.
                    </p>
                </Link>

                <Link to="/oferta/projekty-graficzne" className="offer-box">

                    <div className="icon">
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                        </svg>
                        <h3>Projekty graficzne</h3>
                    </div>

                    <p>
                        Indywidualnie podchodzę do każdego projektu graficznego
                        strony.
                    </p>
                </Link>

                <Link to="/oferta/hosting" className="offer-box">

                    <div className="icon">
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                        </svg>
                        <h3>Hosting</h3>
                    </div>

                    <p>
                        Zapewniam wydajny oraz bezpieczny hosting do każdego
                        projektu.
                    </p>
                </Link>

                <Link to="/oferta/pozycjonowanie" className="offer-box">

                    <div className="icon">
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <h3>Pozycjonowanie</h3>
                    </div>

                    <p>
                        Twoja strona będzie wyżej w Google dzięki poprawnej
                        semantyce.
                    </p>
                </Link>

                <Link to="/oferta/opieka-nad-strona" className="offer-box">

                    <div className="icon">
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        <h3>Opieka nad stroną</h3>
                    </div>

                    <p>
                        Profesjonalna opieka nad zarządzaniem strony oraz
                        treścią.
                    </p>
                </Link>
            </div>
        </div>
    </section>
);

export default homepageOffer;
