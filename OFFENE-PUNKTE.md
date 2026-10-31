# Offene Punkte – Website Smoker's Best Food Truck

Stand: 31.10.2026 · Haupt-Repository: `foodtruck-bernd-2`, Zweig `main`

Abhaken mit `[x]`, sobald erledigt.

---

## 1. Inhalte, die noch fehlen

- [ ] **Zwei Fotos für die Speisekarte** (Bilder-Slider oben auf `speisekarte.html`)
  - Dateien: `assets/img/essen/foto-1.jpg` und `assets/img/essen/foto-2.jpg`
  - Querformat (16:9), ca. 1600 px breit, z. B. Burger und Pommes
  - Erscheinen automatisch statt „Foto folgt“ (werden schwarz-weiß angezeigt)

- [ ] **Adresse von Bernd Glatz für das Impressum**
  - Straße, Hausnummer, PLZ, Ort → `impressum.html` und `datenschutz.html` (Platzhalter `[Straße Hausnummer]`, `[PLZ Ort]`)
  - Umsatzsteuer-ID, falls vorhanden → `impressum.html` (`[falls vorhanden]`), sonst Zeile entfernen
  - **Ohne Anschrift darf die Seite in Deutschland nicht online gehen.**

- [ ] **Termine / Google Kalender** (erst mit Bernd klären, wer die Termine pflegt)
  1. Unter calendar.google.com eigenen Kalender anlegen, z. B. „Smoker's Best Termine“
  2. Einstellungen des Kalenders → „Öffentlich freigeben“ anhaken
  3. „Kalender integrieren“ → **Kalender-ID** kopieren (`…@group.calendar.google.com`)
  4. In `termine.html` bei `data-calendar-id="KALENDER-ID@group.calendar.google.com"` eintragen

## 2. Vor dem Start klären

- [ ] **Rechte am Foto „Genießen“** (`assets/img/geniessen.jpg`, Mann mit Burger)
  - Stammt von der alten Website, vermutlich Stockfoto des alten Webdesigners („SB Brand“).
  - Klären, ob es weiter benutzt werden darf – sonst durch ein eigenes Foto ersetzen (gleicher Dateiname).

- [ ] **Titelbild** (`assets/img/hero-bw.jpg`): zeigt noch „BBQ“ und „Streetfood“, obwohl es nur noch Burger & Pommes gibt. Optional ersetzen/anpassen.

- [ ] **Datenschutzerklärung prüfen lassen** (Vorlage, keine Rechtsberatung)
  - Hosting-Anbieter eintragen (Platzhalter `[Name des Anbieters]`), bei GitHub Pages: GitHub Inc.
  - Am besten mit einem Datenschutz-Generator oder einer Fachperson abgleichen.

## 3. Online stellen

- [ ] **GitHub Pages einschalten**: Repository → Settings → Pages → Source „Deploy from a branch“ → Branch `main`, `/ (root)` → **Save**
  - Adresse danach: https://leonwelsch5-droid.github.io/foodtruck-bernd-2/

- [ ] **Domain `foodtruck-smokersbest.de`**
  - Klären, bei welchem Anbieter die Domain liegt und ob Bernd Zugang hat (alte Seite wurde von „SB Brand“ gebaut, kein Kontakt mehr).
  - Domain auf die neue Seite umleiten (bei GitHub Pages: „Custom domain“ + DNS-Einträge beim Anbieter).

- [ ] **Sperre für Suchmaschinen entfernen** (erst wenn alles oben erledigt ist)
  - `<meta name="robots" …>` aus `index.html`, `speisekarte.html`, `termine.html` entfernen
  - `robots.txt` löschen oder auf `Allow: /` ändern
  - (`impressum.html` und `datenschutz.html` dürfen `noindex` behalten)

## 4. Optional / später

- [ ] Kurze Notiz von Bernd, ob „Über uns“-Text so passt (Bernd Glatz, „Glatz & Glatz“)
- [ ] Eigenes, unbearbeitetes Foto vom Truck (z. B. für „Über uns“)
- [ ] Altes Repository `foodtruck-Bernd` aufräumen/archivieren, wenn nur noch `foodtruck-bernd-2` genutzt wird

---

## Bereits erledigt (Überblick)

- Schwarz-Weiß-Design im Streetfood-Look, Sie-Anrede
- Eigene Seiten: Startseite, Speisekarte, Termine, Impressum, Datenschutz – Menüleiste wie auf der alten Seite
- Speisekarte mit Preisen und Zutaten (Hamburger 8 €, Cheeseburger 9 €, BBQ Burger 10 €, Veggie Burger 9 €, Pommes 3,50 € / mit Ketchup oder Mayo 4 € / Chili Cheese Fries 5 €)
- Kontakt: +49 151 644 33 778, smokersbest@web.de, Instagram @smokersbestfoodtruck
- Neues Logo („& more“) bei Über uns, Menüleiste, Fußzeile; Titelbild mit ursprünglichem Logo
- Bereich „Genießen“ mit farbigem Foto, Texte fliegen beim Scrollen ein
- Google Kalender mit Zwei-Klick-Zustimmung (DSGVO), Schriften lokal eingebunden

## Weiterarbeiten / lokal ansehen

1. VS Code: Zweig `main` wählen → **Pull**
2. Server starten: Live Server „Go Live“ oder `python3 -m http.server 8000` (oder `start-server.bat` / `start-server.command`)
3. Im Browser **http://localhost:8000** öffnen; nach Änderungen Tab schließen und neu öffnen
