import React from 'react'
import { Link } from "gatsby"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-box">
                    <Link to="/">
                        marcinzogrodnik.pl
                    </Link>
                </div>
                <div className="footer-box">
                    <p><span>739 907  919</span> - Zadzwoń</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer