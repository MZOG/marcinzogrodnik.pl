/* eslint-disable */
import React from "react"
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const StronyInternetowe = (query) => {
    const shareImageName = "oferta-strony_internetowe";
    let shareImage;

    query.data.allFile.edges.map(image => {
        if (image.node.name === shareImageName) {
            shareImage = image.node.publicURL
        }
    })

    // Language
    // const [lang, setLang] = useState(true)

    return (
    <Layout>
        <SEO
            // lang={(lang ? 'pl' : 'en')}
            lang="pl"
            title="Strony internetowe"
            description="Do stworzenia szybkiej oraz nowoczesnej strony internetowej wykorzystuję JAMstack oraz WordPress."
            shareImage={shareImage}
        />
        <div className="container page">
            <PageHero
                title="Strony internetowe"
                lead="Zapraszam do zapoznania się z ofertą stron internetowych"
            />

            {/* <button onClick={() => setLang(!lang)}>
                {lang === true ? 'Change Language' : 'Zmień język'}
            </button> */}

            <div className="content">
                <div className="content-image">
                    <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <h2>Strony internetowe</h2>
                <p>
                    Posiadam doświadczenie w tworzeniu ładnych, szybkich oraz przyciągających klientów stron internetowych.
                    Do stworzenia strony wykorzystuję głównie system zarządzania treścią WordPress, w którym czuję się najlepiej.
                    Nie zamykam się jednak tylko na jedno rozwiązanie, potrafię doradzić jaki system sprawdzi się najlepiej
                    na Twojej stronie internetowej.
                </p>

                <h2>JAMstack</h2>
                <p>
                    W świecie stron internetowych nie ma miejsca na stagnację, technologia rozwija się z dnia na dzień, dlatego
                    programiści z całego świata bardzo pozytywnie zareagowali na nowy sposób tworzenia stron internetowych, czyli JAMstack.
                </p>

                <h3>Co to jest JAMstack?</h3>
                <p>
                    Strona internetowa typu JAMstack to nowy sposób tworzenia stron internetowych.
                    Dawno, dawno temu strony internetowe nie posiadały systemu zarządzania treścią, dużo trudniej
                    było aktualizować treść na stronie, ponieważ były to zwykłe pliki HTML.
                    Każda zmiana treści na stronie, dodania nowego wpisu na blogu, czy dodanie podstrony wiązało się
                    z dokładnym sprawdzeniem wszystkich plików, aby strona poprawnie działała. Było to bardzo czasochłonne
                    oraz generowało spore koszty.
                    JAMstack jest bardzo podobny do pierwotnych stron internetowych, różnica jest taka, że obecnie
                    strona internetowa jest generowana za każdym razem gdy zmieni się treść.
                    Obecnie tworzenie strony JAMstack jest bardzo proste, system Gatsby świetnie radzi sobie z generowaniem
                    nowych podstron oraz postów na stronę. W przypadku, gdy chcemy dodać nową stronę z nawigacją, to nie musimy
                    już zmieniać / dodawać kolejnych podstron do nawigacji, ponieważ odpowiednie komponenty dbają o to, aby
                    cała strona działała poprawnie.
                </p>
                <p>
                    Strona JAMstack nie wymaga serwera WWW, wszystkie zapytania są generowane przez API, dlatego strona internetowa jest
                    o wiele szybsza niż standardowe strony oparte np. o WordPress.
                    Zobacz jak szybka jest strona <a href="/">marcinzogrodnik.pl</a>, wykorzystałem właśnie JAMstack jako bazy.
                </p>
                <p>
                    Wspomniałem wcześniej, że strona JAMstack nie posiada systemu zarządzania treścią, dlatego dodawanie nowych postów,
                    stron jest nieco trudniejsze niż w przypadku WordPress. JAMstack to bardzo przemyślany system, który umożliwia
                    dodanie zewnętrznych systemów, takich jak DatoCMS do strony, aby wyświetlać treść.
                    DatoCMS to moim zdaniem najlepszy system zarządzania treścią, który wykorzystuje GraphQL do zapytań o posty, obrazki oraz podstrony.
                    Klient dostaje pełny dostęp do panelu administratora i może samodzielnie dodawać treść. Po kliknięciu opublikuj, strona internetowa
                    jest generowana od nowa i dostępna dla każdego kto ją odwiedzi.
                </p>

                <h2>Strona wizytówka</h2>
                <p>
                    Dostaję sporo zapytań o strony informacyjne / wizytówki. Są to zazwyczaj proste strony typu One Page, z informacją o produkcie lub usłudze
                    oraz formularzem kontaktowym. Stronę wizytówkę jestem w stanie wykonać w ciągu kilku dni, oczywiście po wcześniejszym
                    dokładnym uzgodnieniu czego klient wymaga. Najczęściej do stworzenia strony wizytówki / informacyjnej wykorzystuję JAMstack.
                </p>

            </div>
            <QuickContact />
        </div>
    </Layout>
    );
}

export const query = graphql`
  query stronaInternetowa {
    allFile(filter: {extension: {eq: "jpg"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
  }
`

export default StronyInternetowe;
