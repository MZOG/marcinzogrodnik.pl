import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../assets/styles.scss";

import CookieAlert from "./cookie";

function Layout ({ children, article }) {
    return (
        <>
            <Header article={article} />
            <main>
                {children}
            </main>
            <Footer />
            <CookieAlert />
        </>
    );
};

export default Layout;
