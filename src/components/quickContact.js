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
          <input type="text" />
          <input type="submit" value="Zróbmy to →" />
        </form>
      </div>
    </section>
  )
}

export default QuickContact
