import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../assets/styles.scss";

function Layout ({ children }) {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
