import React from "react";

import Header from "./header";
import Footer from "./footer";
import "../assets/styles.scss";

function Layout ({ children }) {
    return (
        <main>
            <Header/>
            {children}
            <Footer />

            <div className="bg">
                <div className="lines-vert">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </main>
    );
};

export default Layout;
