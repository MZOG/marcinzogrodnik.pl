import React from 'react';
import {Link} from 'gatsby';

const QuickContact = () => {
    return(
        <div className="quickContact">
            <h2>Dowiedz się więcej</h2>
            <p>Chcesz porozmawiać o nowej stronie internetowej? Zostaw numer telefonu.</p>

            <form className="quickContact-form" name="CallToCustomer" method="POST" data-netlify="true">
                <input type="tel" name="customerPhone" placeholder="739907919" />
                <button type="submit">Klik</button>
            </form>
        </div>
    )
}

export default QuickContact;