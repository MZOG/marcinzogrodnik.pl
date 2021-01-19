---
slug: "css-zmiana-koloru-zaznaczonego-tekstu"
date: "2020-12-28T18:40"
title: "CSS: Zmiana koloru zaznaczonego tekstu"
description: "Prosty trick na zmianę koloru zaznaczonego tekstu w CSS."
image: ../images/markdown/selection-css-2.jpeg
seoImage: ../images/markdown/selection-css.jpeg
type: "post"
published: true
---

## Co to jest ::selection?

Strony internetowe powinny być unikalne, wyróżniać się na tle konkurencji.
Dziś poznasz fajny trick, który zmieni kolor zaznaczonego tekstu.

Użyjemy pseudo selektora - ```::selection``` w wybranym elemencie, aby zmienić kolor tła.
```::selection``` możemy zdefiniować na wybranym elemencie np. klasie ```.container```,
jeżeli nie zdefiniujemy elementu, wtedy ```::selection``` zadziała na całej stronie.

```
// dodanie globalnego tła oraz koloru dla zaznaczonego tekstu
::selection {
  background: aquamarine;
  color: black;
}

// dodanie tła oraz koloru dla zdefiniowanego elementu
<p class="custom-text-selection">Select some of this text.</p>

.custom-text-selection::selection {
  background: deeppink;
  color: white;
}
```

Przykład:
<p class="custom-text-selection">Zaznaczony tekst zmieni tło na różowy, oraz kolor na biały.</p>