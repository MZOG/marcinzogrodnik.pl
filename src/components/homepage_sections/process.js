import React from "react"

import Planowanie from "../../images/planowanie.svg"
import Projektowanie from "../../images/projektowanie.svg"
import Programowanie from "../../images/programowanie.svg"
import Wdrozenie from "../../images/wdrozenie.svg"

function Process() {
  return(
    <section className="homepage homepage_process">
      <div className="container">
        <h2>Jak wygląda proces tworzenia <span>strony internetowej?</span></h2>

        <div className="process-boxes">
          <div className="process-boxes-item">
            <img src={Planowanie} alt="Planowanie strony internetowej Katowice"/>
            <h3>Planowanie</h3>
            <p>
              Wybieram najbardziej optymalne rozwiązanie dla strony
              internetowej klienta. Przeprowadzam również wywiad,
              w którym staram się zebrać jak najwięcej informacji,
              aby dobrze oszacować czas wykonania projektu.
              Na tym etapie najważniejsze jest zrozumienie
              potrzeb klienta.
            </p>
          </div>

          <div className="process-boxes-item">
            <img src={Projektowanie} alt="Projektowanie strony internetowej Katowice"/>
            <h3>Projektowanie</h3>
            <p>
              Wybieram lub tworzę projekt graficzny strony / sklepu
              klienta. Tworzenie grafiki od podstaw jest bardzo
              ekscytujące, ponieważ staram się, aby klient był
              mocno zaangażowany w ten proces. Staram się
              zaskoczyć klienta, jednocześnie jestem otwarty na
              każde propozycje ze strony klienta.
            </p>
          </div>

          <div className="process-boxes-item">
            <img src={Programowanie} alt="Programowanie strony internetowej Katowice"/>
            <h3>Programowanie</h3>
            <p>
              Etap, w którym klient nie uczestniczy, tworzę strukturę
              strony internetowej, koduję szablon graficzny oraz
              tworzę niezbędne komponenty, aby strona wyglądała
              tak, jak w projekcie graficznym.
              Strona klienta jest również testowana w różnych
              środowiskach, np. różnych systemach operacyjnych,
              przeglądarkach czy urządzeniach.
            </p>
          </div>

          <div className="process-boxes-item">
            <img src={Wdrozenie} alt="Wdrożenie strony internetowej Katowice"/>
            <h3>Wdrożenie</h3>
            <p>
              Wdrożenie to ważny moment i dla programisty oraz
              klienta, strona / sklep od tego momentu jest
              dostępny publicznie pod danym adresem www.
              Wykonywane są również testy produkcyjne, takie
              jak rejestracja użytkowników, formularze kontaktowe,
              czy proces zakupowy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process