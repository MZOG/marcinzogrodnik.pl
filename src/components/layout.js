import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../assets/styles.scss"

import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"
import MessengerCustomerChat from "react-messenger-customer-chat"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <CookieConsent
        location="bottom"
        buttonText="Ok"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#00304D" }}
        buttonStyle={{ color: "#fff", background: "#FB3D54" }}
        expires={150}
      >
        Strona wykorzystuje pliki cookies.{" "}
        <Link to="/prywatnosc">Polityka prywatności</Link>.
      </CookieConsent>
      <MessengerCustomerChat
        pageId="112142883474554"
        appId="2659674054065884"
      />
      <Footer />
    </div>
  )
}

export default Layout
