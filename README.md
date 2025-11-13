# Aplikacja Przewodnik po Filmach (Movie Guide App)

Responsywna aplikacja front-endowa do wyszukiwania informacji o filmach, korzystająca z API OMDb (The Open Movie Database).

---

## 🚀 Funkcje

* **Wyszukiwanie filmów:** Umożliwia wyszukiwanie filmów po tytule.
* **Widok siatki:** Wyniki wyszukiwania są wyświetlane w czytelnej, responsywnej siatce kart.
* **Widok szczegółowy:** Po kliknięciu na kartę filmu, aplikacja pobiera i wyświetla szczegółowe informacje, takie jak:
    * Pełny tytuł i plakat
    * Ocena IMDb (&#11088;)
    * Gatunek (dynamicznie dzielony na tagi)
    * Data premiery i czas trwania
    * Obsada i pełna fabuła (Plot)
* **Obsługa ładowania (Spinner):** Wyświetla animację ładowania podczas każdego zapytania do API.
* **Obsługa błędów:** Czytelnie informuje użytkownika o błędach (np. "Film nie został znaleziony" lub błędy sieci).
* **Pełna responsywność:** Nowoczesny design oparty na ciemnym motywie (dark mode), który świetnie wygląda na każdym urządzeniu.

---

## 🛠️ Użyte Technologie

* **HTML5:** Semantyczna struktura strony.
* **CSS3:**
    * Nowoczesny design (Dark Mode)
    * Zmienne CSS (CSS Variables)
    * Flexbox & CSS Grid
    * Animacje (Spinner)
    * Media Queries (RWD)
* **JavaScript (ES6+):**
    * Fetch API (do komunikacji z OMDb)
    * Async/Await (do obsługi asynchronicznych zapytań)
    * Dynamiczne renderowanie i manipulacja DOM
    * Obsługa zdarzeń (Event Listeners)
* **API:**
    * **OMDb API** do pobierania danych o filmach.

---

## 🏁 Uruchomienie lokalne (Setup)

Aby uruchomić ten projekt na własnym komputerze, potrzebujesz darmowego klucza API z OMDb.

1.  Wejdź na [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) i wygeneruj swój darmowy klucz API.
2.  Sklonuj to repozytorium.
3.  Otwórz plik `script.js`.
4.  Znajdź linię `const apiKey = 'WPISZ_TUTAJ_SWOJ_KLUCZ_OMDB';`
5.  Wklej w to miejsce swój klucz API.
6.  Otwórz plik `index.html` w swojej przeglądarce.