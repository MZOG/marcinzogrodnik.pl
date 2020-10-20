/* eslint-disable */
import React from "react"

const QuickContact = () => {
  return (
    <section className="quick-contact">
      <div className="quick-contact_content">
        <h2>Stwórzmy wspaniały projekt!</h2>

        <p>
          Podaj swój numer telefonu lub adres e-mail, oddzwonię i porozmawiamy
          na temat Twojej nowej strony internetowej.
        </p>

        <form>
          <div className="form-input">
            <label htmlFor="phone-email">
              <input type="text" name="phone-email" id="phone-email" />
            </label>
          </div>
          <div className="form-input">
            <label htmlFor="submit">
              <input type="submit" value="Zróbmy to →" />
            </label>
          </div>
        </form>
      </div>
    </section>
  )
}

export default QuickContact
