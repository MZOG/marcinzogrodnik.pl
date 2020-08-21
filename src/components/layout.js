import React from "react";

import Header from "./header";
import Footer from "./footer";
import "../assets/styles.scss";

const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
