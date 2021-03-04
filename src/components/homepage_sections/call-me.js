import React from "react"

function CallMe() {
  return(
    <section className="home home_callme">
      <div className="container">
        <h2>Jestem tu, żeby Ci pomóc</h2>
        <p>
          Krótka 3 minutowa rozmowa jest znacznie lepsza, niż wymiana e-maili. {" "}
          <span>Zostaw swój numer telefonu, oddzwonię i porozmawiamy.</span>
        </p>

        <form
            name="QuickContact"
            method="POST"
            data-netlify="true"
            action="/kontakt/success"
            >
            <input type="hidden" name="form-name" value="QuickContact" />
            <div className="home_callme-item">
              <input
                type="tel"
                name="telefon"
                placeholder="739 907 919"
              />
            </div>
            <button className="home_callme-item-send">
              Wyślij
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </form>
      </div>
    </section>
  )
}

export default CallMe