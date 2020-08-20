import React from "react";

import Header from "./header";
import "../assets/styles.scss";

const Layout = ({ children }) => {
    return (
        <main>
            <Header />

            {children}
        </main>
    );
};

export default Layout;
