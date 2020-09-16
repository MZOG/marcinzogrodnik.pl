import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../images/heroimage.svg"
import reactlogo from "../images/react.svg"
import jamstack from "../images/jamstack.svg"
import gatsby from "../images/gatsby.svg"
import netlify from "../images/netlify.svg"

const Homepage = () => {
    return(
        <Layout>
            <SEO
                title="Marcin Zogrodnik"
                description="Marcin Zogrodnik - Nowoczesne, szybkie oraz bezpieczne strony internetowe JAMstack oraz WordPress. Zapoznaj się z ofertą."
                // schemaMarkup={schema}
            />

            <section className="homepage-hero">
                <div className="container">
                    <div className="hero-lead">
                        <h1>Marcin Zogrodnik</h1>
                        <p>Szybkie, bezpieczne oraz nowoczesne strony internetowe dostosowane do Twoich potrzeb.</p>
                        <div className="cta">
                            <button>
                                Zobacz ofertę
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                            </button>
                        </div>
                        <p className="tech">WYKORZYSTYWANE TECHNOLOGIE</p>
                        <div className="logos">
                            <img src={reactlogo} alt="Marcin Zogrodnik - React"/>
                            <img src={jamstack} alt="Marcin Zogrodnik - JAMstack"/>
                            <img src={gatsby} alt="Marcin Zogrodnik - Gatsby"/>
                            <img src={netlify} alt="Marcin Zogrodnik - Netlify"/>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={HeroImage} alt="Marcin Zogrodnik - Strony internetowe"/>
                    </div>
                </div>

                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </section>
            <section className="homepage-steps">
                <div className="container">
                    <h2>Jak wygląda współpraca</h2>
                    <div className="steps-lead">
                        Dokładne poznanie oczekiwań klienta jest dla mnie priorytetem przy tworzeniu indywidualnej strony internetowej. Zobacz jak wygląda współpraca.
                    </div>

                    <div className="steps-container">
                        <div className="step">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                            <h3>Kontakt & Brief</h3>
                            <p>Zadzwoń lub skontaktuj się ze mną w celu przedstawienia swoich oczekiwań w sprawie strony internetowej.</p>
                        </div>
                        <div className="step">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                            <h3>Wycena projektu</h3>
                            <p>Dobieram najlepszą technologię do typu strony, który klient oczekuje oraz przedstawiam wstępną wycenę.</p>
                        </div>
                        <div className="step">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                            <h3>Realizacja</h3>
                            <p>Tworzę stronę oraz tablicę z zadaniami, klient dokładnie widzi na jakim etapie rozwoju jest strona internetowa.</p>
                        </div>
                        <div className="step">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                            <h3>Konsultacje</h3>
                            <p>Podczas prac nad stroną internetową klient dostaje link do wersji deweloperskiej w celu omówienia zmian.</p>
                        </div>
                        <div className="step">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <h3>Akceptacja</h3>
                            <p>Akceptacja strony internetowej przez klienta, oznacza to, że obie strony są zadowolone z efektów współpracy.</p>
                        </div>
                        <div className="step">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <h3>Rozliczenie</h3>
                            <p>Wystawienie faktury oraz rozliczenie za wykonane usługi + uruchomienie strony internetowej na wskazanym serwerze.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="homepage-offer">
                <div className="container">
                    <h2>Oferowane usługi</h2>
                </div>
            </section>
            <div className="bg">
                <div class="lines-vert">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </Layout>

    )
}

export default Homepage