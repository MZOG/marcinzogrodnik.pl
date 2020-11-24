import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../assets/styles.scss";

function Layout ({ children, postTitle }) {
    return (
        <>
            <Header postTitle={postTitle} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
