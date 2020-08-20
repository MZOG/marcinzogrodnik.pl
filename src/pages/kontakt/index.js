/* eslint-disable */

import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";

const Kontakt = () => (
    <Layout>
        <SEO title="Kontakt" />
        <section className="container page">
            <PageHero title="Kontakt" lead="lead text" />

            <div className="contact-wrapper">
                <div className="contact-wrapper_left">
                    <p>
                        Masz pytanie, chcesz wycenić projekt? Napisz lub
                        zadzwoń.
                    </p>
                    <p>
                        Z przyjemnością odpowiem na każde pytanie. Projekty
                        wykonuję zdalnie, spotkać możemy się wirtualnie lub w
                        dowolnym miejscu w Polsce.
                    </p>

                    <div className="contact-box">
                        <p>
                            <svg
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            UK - 078 50545566
                        </p>
                        <p>
                            <svg
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            PL - 739 907 919
                        </p>
                        <p>
                            <svg
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <a href="mailto:kontakt@strona-internetowa.katowice.pl">
                                kontakt@strona-internetowa.katowice.pl
                            </a>
                        </p>
                    </div>

                    <h2>Zostaw numer telefonu</h2>
                    <p>
                        Podaj swój numer telefonu, skontaktuję się w ciągu 2h.
                    </p>

                    <form action="" className="form">
                        <div className="form-item">
                            <label htmlFor="name" aria-label="Name">
                                Imię i nazwisko <span>*</span>
                            </label>
                            <input type="text" placeholder="np. Jan Kowalski" />
                        </div>

                        <div className="form-item">
                            <label htmlFor="phone" aria-label="Phone">
                                Numer telefonu <span>*</span>
                            </label>
                            <input type="text" placeholder="np. 503379917" />
                        </div>

                        <div className="form-item">
                            <input type="submit" value="Zadzwoń do mnie" />
                        </div>
                    </form>
                </div>

                <div className="contact-wrapper_right">
                    <h2>Formularz kontaktowy</h2>
                    <form action="" className="form">
                        <div className="form-item">
                            <label htmlFor="name" aria-label="Imię">
                                Imię i nazwisko <span>*</span>
                            </label>
                            <input type="text" placeholder="np. Jan Kowalski" />
                        </div>

                        <div className="form-item">
                            <label htmlFor="phone" aria-label="Phone">
                                Numer telefonu
                            </label>
                            <input type="text" placeholder="np. 503379917" />
                        </div>

                        <div className="form-item">
                            <label htmlFor="email" aria-label="E-mail">
                                E-mail <span>*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="np. jan@gmail.com"
                            />
                        </div>

                        <div className="form-item">
                            <label htmlFor="message" aria-label="Message">
                                Wiadomość <span>*</span>
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Twoja wiadomość"
                            ></textarea>
                        </div>

                        <div className="form-item">
                            <input type="submit" value="Wyślij wiadomość" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="contact-small">
                <p className="small">
                    Pola oznaczone gwiazdką (*) są obowiązkowe.
                </p>
                <p className="small">
                    Zarówno twój adres e-mail, jak i dane personalne nie będą
                    udostępniane i publikowane.
                </p>
                <p className="small">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych
                    podanych w formularzu zgłoszeniowym przez firmę Strona
                    internetowa Katowice jako Administratora Danych Osobowych w
                    celu obsługi ww. zapytania, przygotowania oferty i
                    świadczenia usługi. Oświadczam jednocześnie, że
                    zapoznałem/am się z <Link to="/regulamin">Regulaminem</Link>{" "}
                    oraz z pouczeniem zawartym w dokumencie{" "}
                    <Link to="/polityka-prywatnosci">Polityką prywatności</Link>{" "}
                    oraz informacją o przetwarzaniu danych osobowych i akceptuję
                    te zapisy.
                </p>
            </div>
        </section>
    </Layout>
);

export default Kontakt;
