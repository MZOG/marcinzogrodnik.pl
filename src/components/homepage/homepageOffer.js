import React from "react"

const HomepageOffer = () => (
  <section className="homepage-offer">
    <div className="container">
      <h2>Oferowane usługi</h2>
      <p className="offer-lead">
        Oferuję wysokiej jakości usługi tworzenia stron oraz sklepów
        internetowych. Ponad to, nie musisz się martwić o zarządzanie stroną,
        hostingiem czy pozycjonowaniem.
      </p>

      <div className="offer-container">
        <div className="offer">
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
          <p>Nowoczense strony internetowe WordPress oraz JAMstack.</p>
        </div>
        <div className="offer">
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
          <p>
            Konfiguracja popularnych systemów E-Commerce dla Twoich potrzeb.
          </p>
        </div>
        <div className="offer">
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
          <p>Indywidualnie podchodzę do każdego projektu graficznego strony.</p>
        </div>
        <div className="offer">
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
          <p>Zapewniam wydajny oraz bezpieczny hosting do każdego projektu.</p>
        </div>
        <div className="offer">
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
          <p>Twoja strona będzie wyżej w Google dzięki poprawnej semantyce.</p>
        </div>
        <div className="offer">
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
          <p>Profesjonalna opieka nad zarządzaniem strony oraz treścią.</p>
        </div>
      </div>
    </div>
  </section>
)

export default HomepageOffer
