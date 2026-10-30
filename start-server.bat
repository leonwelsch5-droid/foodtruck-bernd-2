@echo off
rem Startet die Website lokal (Windows): Doppelklick
cd /d "%~dp0"
echo Website laeuft auf http://localhost:8000  (Beenden mit Strg+C)
start "" http://localhost:8000
python -m http.server 8000
