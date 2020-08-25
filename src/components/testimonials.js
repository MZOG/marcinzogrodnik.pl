import React from 'react';

const Testimonials = () => {
    return(
        <section className="testimonials">
            <div className="container">
                <h2>Opinie klientów</h2>

                <div className="testimonial-content">
                    <div className="testimonials-box">
                        <p>
                        Współpraca z Marcinem była wspaniała. W błyskawicznym tempie odpowiadał na wszystkie moje zapytania i zamieszczał kolejne elementy na stronie. W cierpliwy sposób tłumaczył na czym polega budowanie strony internetowej i na czym jako przedsiębiorca powinnam się skupić najbardziej. W stu procentach spełnił moje oczekiwania, zatem mogę go polecić jako świetnego fachowca!
                        </p>
                        <p className="author">
                            Karolina Wawrzyniak
                            <span><a href="https://doradcajezykowy.com">doradcajezykowy.com</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;