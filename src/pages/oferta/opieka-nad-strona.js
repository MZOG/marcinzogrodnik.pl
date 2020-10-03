/* eslint-disable */
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Link } from "gatsby";

const OpiekaNadStrona = () => {

    return (
    <Layout>
        <SEO title="Opieka nad stroną"
        description="Nie masz czasu zajmować się swoją stroną internetową? Dla mnie to nie problem! Zajmę się każdą drobnostką na Twojej stronie internetowej."
        />
        <div className="container page">

            <div className="content">
              <div className="content-image">
                <svg fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h2>WordPress</h2>
              <p>
                WordPress to najpopularniejszy system zarządzania stroną, wiele stron z niego korzysta.
                Zdarza się, że brakuje czasu na zarządzanie stroną (czyt. dodawanie nowych postów, aktualizacja
                treści, promocje itp), co negatywnie wpływa np. na <Link to="/oferta/pozycjonowanie">pozycjonowanie</Link>.
              </p>
              <p>
                Nie pozwól, aby konkurencja była od Ciebie lepsza, tylko dlatgo, że skupiasz się na rozwoju firmy, a nie
                na stronie internetowej.
              </p>
              <p>
                Posiadam wieloletnie doświadczenie z WordPress'em, i wiem jak szybko i efektywnie nim zarządzać.
                Aktualizacja treści z poziomu administratora, czy zmiany w kodzie źródłowym strony to dla mnie
                codzienność. Jestem w stanie szybko oraz skutecznie rozwiązać każdy problem.
              </p>

              <h2>Inne platformy / Sklepy</h2>
              <p>
                Posiadam również doświadczenie w zarządzaniu sklepami internetowymi, głównie WooCommerce, Magento oraz BigCommerce.
                Jeżeli szukasz osoby, która zajmie się dodawaniem nowych produktów, aktualizacją tekstów lub obrazków, to dobrze trafiłeś.
              </p>
              <p>
                Pracowałem z większością popularnych systemów zarządzania treścią, tylko nieliczne systemy potrafią mnie zaskoczyć.
              </p>

              <h2>Pomoc techniczna</h2>
              <ul>
                <li>Optymalizacja strony, poprawa wydajności oraz poprawa w punktacji Google Speed Test</li>
                <li>Zarządzanie adresami pocztowymi, konfiguracja</li>
                <li>Kopie stron internetowych oraz bazy danych</li>
              </ul>

              <p>
                To i wiele, wiele innych usług jestem w stanie dla Ciebie zrobić.
              </p>

              <p>
                Jesteś zainteresowany? <Link to="/kontakt">Zadzwoń, lub napisz do mnie i przedstaw co potrzebujesz</Link>.
              </p>

            </div>

        </div>
    </Layout>
    );
}



export default OpiekaNadStrona;
