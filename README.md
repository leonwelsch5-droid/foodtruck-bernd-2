# Smoker's Best Food Truck – Website

Statische Website (HTML/CSS, kein Build nötig) im Schwarz-Weiß-Streetfood-Look.

- `index.html`: Startseite (Genießen, Über uns, Catering, Kontakt)
- `speisekarte.html`, `termine.html`: Speisekarte und Termine (Google Kalender)
- `impressum.html`, `datenschutz.html`: Rechtstexte (Vorlagen, müssen ergänzt werden)
- `css/style.css`: Design
- `assets/`: Bilder, Logo und lokal eingebundene Schriften (keine Google-Server, DSGVO-freundlich)

## Lokal ansehen (localhost)

Voraussetzung: [Python 3](https://www.python.org/downloads/) ist installiert.

1. Repository herunterladen: auf GitHub **Code → Download ZIP** und entpacken (oder `git clone`).
2. Server starten:
   - **Windows:** Doppelklick auf `start-server.bat`
   - **Mac/Linux:** Doppelklick auf `start-server.command` (oder im Terminal `./start-server.command`)
3. Im Browser öffnen: **http://localhost:8000**

Alternativ manuell im Ordner: `python3 -m http.server 8000`

**Noch offen:** Anschrift im Impressum/Datenschutz, Google-Kalender-ID (`termine.html`), zwei Fotos für den Slider (`assets/img/essen/`).
