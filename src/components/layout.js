import React from "react";
import Header from "./header";
import Footer from "./footer";
// import FreeQuote from "./freeQuote";

import "../assets/styles.scss";

function Layout ({ children, article, homepage }) {
    return (
        <>
            <Header article={article} homepage={homepage}/>
            <main>
                {children}
            </main>
            <Footer />
            {/* <FreeQuote /> */}
        </>
    );
};

export default Layout;
