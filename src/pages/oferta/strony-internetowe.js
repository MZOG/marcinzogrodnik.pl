import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const StronyInternetowe = () => (
    <Layout>
        <SEO title="Strona internetowa" />
        <div className="container page">
            <PageHero
                title="Strony internetowe"
                lead="Zapraszam do zapoznania się z ofertą stron internetowych"
            />

            <div className="content">
                <h2>WordPress</h2>
                <p>
                    WordPress to najpopularniejszy system zarządzania treścią (CMS) w internecie.
                    Popularność zyskał dzięki łatwości w obsłudze oraz możliwości dostosowania do indywidualnych potrzeb.
                    Baza pluginów oraz gotowych rozwiązań graficznych jest bardzo duża i każdy może samodzielnie
                    zarządzać swoją stroną wizualnie oraz
                </p>
                <p>
                    Gotowe rozwiązania często nie są dopracowane, kupiona skórka może nie do końca odpowiadać
                    wymaganiom klienta, dlatego projekty wykonane przez <a href="/">marcinzogrodnik.pl</a> są tworzone od zera,
                    pod każdego klienta indywidualnie.
                </p>

                <h2>JAMstack</h2>
                <p>
                    JAMstack, czyli JavaScript, API, Markup to dość nowy termin w świecie tworzenia stron internetowych.
                    Strona <a href="/">marcinzogrodnik.pl</a> wykorzystuje właśnie JAMstack.
                </p>
                <p>
                    Zaletą tego rozwiązania są strony statyczne, które nie potrzebują drogiego hostingu czy serwera VPS.
                    Strony statyczne to idealne rozwiązanie dla małych i średnich firm, które potrzebują strony "wizytówki".
                    Strona internetowa JAMstack nie posiada panelu administracyjnego, w przypadku, gdy klient chciałby
                    na stronie wyświetać posty, wtedy wykorzystuję DatoCMS, do edycji treści na stronie.
                </p>
                <p>
                    Do tworzenia stron JAMstack wykorzystuję Gatsby oraz Next.js, które są oparte na bibliotece React.</p>
                <p>
                    Strona wykorzystująca JAMstack jest o wiele szybsza od standardowej strony opartej na systemie WordPress.
                    Dzieje się tak dlatego, że JavaScript generuje zminimalizowany kod HTML, który jest wyświetlany w przeglądarce.
                    Wygenerowane pliki są bardzo lekkie co pozwala na błyskawiczne załadownie każdej podstrony.
                </p>

                <h2>Wizytówka</h2>
                <p>
                    Każda mała czy średnia firma potrzebuje strony internetowej, strona na facebooku nie wystarczy do stworzenia
                    swojego miejsca w internecie. Nazwa firmy, imię i nazwisko, adres oraz oferowane usługi muszą być poprawnie
                    pozycjonowane w Google, aby uzyskać lepsze rezultaty w rozwoju firmy.
                    Strona wizytówka może pomóc Ci wybić się w swojej branży.
                </p>
                <p>
                    Strona wizytówka to prosta strona, najczęściej strona główna z oferowanymi usługami oraz kilka podstron,
                    które nie wymagają częstej aktualizacji.
                </p>
            </div>
            <QuickContact />
        </div>
    </Layout>
);

export default StronyInternetowe;
