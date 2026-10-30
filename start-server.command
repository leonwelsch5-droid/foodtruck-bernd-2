#!/bin/bash
# Startet die Website lokal (Mac/Linux): Doppelklick oder ./start-server.command
cd "$(dirname "$0")"
echo "Website läuft auf http://localhost:8000  (Beenden mit Strg+C)"
(sleep 1; open "http://localhost:8000" 2>/dev/null || xdg-open "http://localhost:8000" 2>/dev/null) &
python3 -m http.server 8000
