---
slug: "najlepszy-mixin-do-media-query"
date: "2020-12-04T15:00"
title: "Najlepszy mixin do media query"
description: "Bardzo przydatny mixin dla osób tworzących responsywne strony internetowe."
image: ../images/markdown/media-query.jpeg
seoImage: ../images/markdown/media-query_seo.png
type: "post"
---

**SCSS / SASS** to obowiązkowa pozycja dla każdego, kto poważnie podchodzi do
tematu tworzenia stron internetowych.
**SASS** jest to **preprocesor CSS**, który pozwala tworzyć arkusze stylów
w szybki oraz przyjemny sposób. Pliki z rozszerzeniem **.sass** lub **.scss**
posiadają dodatkowe funkcje, które są bardzo przydatne w tworzeniu responsywnych
stron internetowych.

> Pierwsze kroki oraz tutorial SASS już niebawem!

## @mixin mq

**@media** w CSS pozwala definiować style pod różne szerokości urządzenia.
Dobra strona internetowa jest tworzona z myślą **mobile first**, czyli w praktycznie
każdym przypadku szerokość każdego elementu ustawiamy na 100%, aby ładnie wypełnił
ekran urządzenia.

Jeżeli chcemy, aby nasz element zmienił **padding** na tabletach, przeważnie 768px, to dodajemy
nowy **@media** i tam definiujemy wartość, którą chcemy zmienić.

Przykład:

```
.header {
    padding: 10px;

    @media screen and (min-width: 768px) {
        padding: 20px;
    }
}
```

W powyższym przykładzie widzymy, że **.header** przyjmuje padding o wartości 10px z każdej strony.
Jeżeli szerokość naszego urządzenia jest większa, bądź równa 768px, wtedy wartość padding zmieni się na 20px.

Ilość @media jest nieograniczona, możemy zmieniać kolory nawet co 1px.. jednak jest to bardzo rzadko spotykane.
Z reguły stosowane są 3-4 **media query** - tablet, tablet-wide, desktop oraz coraz bardziej popularne desktop-wide.
(Tak w poniższym przykładzie jest troszkę więcej MQ, są to moje, zdefiniowane breakpointy).

Wyobraź sobie, że za każdym razem wpisujesz to samo, żeby manipulować stylami, wpisywanie @media screen.. jest czasochłonne, dlatego przychodzę z pomocą!

```
$breakpoints: (
    "phone":        400px,
    "phone-wide":   480px,
    "phablet":      560px,
    "tablet-small": 640px,
    "tablet":       768px,
    "tablet-wide":  1024px,
    "desktop":      1248px,
    "desktop-wide": 1440px
);
@mixin mq($width, $type: min) {
    @if map_has_key($breakpoints, $width) {
        $width: map_get($breakpoints, $width);
        @if $type == max {
            $width: $width - 1px;
        }
        @media only screen and (#{$type}-width: $width) {
            @content;
        }
    }
}
```

### Wyjaśnienie

**$breakpoints** to zmienna, do której przypisuję różne rozmiary w pikselach (px),
lepiej zapamiętać **tablet**, niż za każdym razem wpisywać **768px**, prawda?

**@mixin mq** to nasza funkcja, którą będziemy wywoływać w dowolnym miejscu, w plikach .scss.
W środku znajdziemy **@if**'a, który sprawdza naszą tablicę **$breakpoints**, jeżeli znajdzie, to dodaje szerokość.
Kolejnym **if**'em jest sprawdzenie typu, **min oraz max**, jest to ważne, ponieważ od tego zależy
jak nasz mixin będzie działać. Jak widzisz domyślnie ustawiony jest **min**, czyli zamiarem naszego
mixin'a będzie zwiększanie wartości od urządzeń mobilnych, aż po większe ekrany.

Jeżeli wszystko się zgadza, to dodawany jest zwykły **@media** z wartościami, które zdefiniujemy.

### min / max

Ciekawą opcją jest zdefiniowanie jak nasz **mixin** ma działać. Domyślnie ustawiliśmy typ **min**,
więc mixin "odpali" się w momencie, gdy szerokość urządzenia będzie osiągnie minimum np. 768px.

```
.site-header {
    padding: 2rem;
    font-size: 1.8rem;
    @include mq('tablet-wide') { // nie musimy podawać wartości min
        padding-top: 4rem;
        font-size: 2.4rem;
    }
}
```

Może się jednak zdarzyć tak, że chcemy aby nasze wartości działały TYLKO do określonej szerokości urządzenia,
w tym przypadku dodajemy **max** do naszego mixin'a.

```
.site-header {
    padding: 2rem;
    font-size: 1.8rem;
    @include mq('tablet-wide', 'max') {
        padding-top: 4rem;
        font-size: 2.4rem;
    }
}
```

## BONUS: VS Code snippet

Wpisywanie za każdym razem **@include mq(...)** może być troszkę czasochłonne, dlatego używam **snippetów**.

1. W VS Code na dole po lewej stronie znajdź ikonę **ustawień**, kliknij i wybierz **User Snippets**
2. Na samym dole znajdź **New Global Snippets file...**
3. Otworzy się nowy dokument, w którym wklejasz gotowy snippet:

```
{
      "include breakpoint": {
        "scope": "scss",
        "prefix": "mq",
        "body": ["@include mq('$1') {", "\t$0", "}"],
        "description": "include breakpoint"
      }
}
```
4. Tyle! Teraz wpisując **mq** + **tab** nasz mixin zostanie dodany!
