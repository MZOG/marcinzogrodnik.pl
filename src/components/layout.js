import React from "react";
import Header from "./header";
import Footer from "./footer";
// import FreeQuote from "./freeQuote";

import "../assets/styles.scss";

function Layout ({ children, article, homepage }) {
    return (
        <div className="web">
            <Header article={article} homepage={homepage}/>
            <main>
                {children}
            </main>
            <Footer />
            {/* <FreeQuote /> */}
        </div>
    );
};

export default Layout;
