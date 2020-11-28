import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../assets/styles.scss";


function Layout ({ children, article }) {
    return (
        <>
            <Header article={article} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
