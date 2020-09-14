import React from "react";

import Header from "./header";
import Footer from "./footer";
import "../assets/styles.scss";

const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            {children}

            <div class="bg">
                <div class="lines-vert">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Layout;
