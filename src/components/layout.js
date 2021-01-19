import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../assets/styles.scss";

import CookieConsent from "react-cookie-consent";
import { Link } from "gatsby";

function Layout ({ children, article }) {
    // Detect homepage
    let homepage = document.location.pathname === "/"
    return (
        <div className={homepage ? "web" : ""}>
            <Header article={article} />
            <main>
                {children}
            </main>
            <CookieConsent
                location="bottom"
                buttonText="Ok"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#00304D" }}
                buttonStyle={{ color: "#fff", background: "#FB3D54" }}
                expires={150}
                >
                Strona wykorzystuje pliki cookies. Więcej informacji na ten temat znajdziesz w <Link to="/prywatnosc">Polityce Prywatności</Link>.
            </CookieConsent>
            <Footer />
            {/* <FreeQuote /> */}
        </div>
    );
};

export default Layout;
