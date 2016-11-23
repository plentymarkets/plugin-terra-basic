![plentymarkets Logo](http://www.plentymarkets.eu/layout/pm/images/logo/plentymarkets-logo.jpg)

Learn how to create your first plentymarkets plugin https://developers.plentymarkets.com

# plugin-terra-basic

## Installation 
1. **Dieses Repository clonen und den master Branch auschecken**
2. **NodeJs Version 6.9.1 installieren (https://nodejs.org/en/).**
3. **Öffne IntelliJ und führe folgenden Befehl aus:**
    1. npm config get prefix
    2. sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
    3. npm install
    4. im IntelliJ den Ordner node_modules als excluded markieren (rechts klick auf den Ordner und "Mark Directory as")
4. **Im IntelliJ folgende Pluings installieren (falls noch nicht installiert):**
    1. NodeJs 
    
## Projekt debuggen

1. **Projekt starten**
    1. npm start
2. **Backend im Browser öffnen**
    1. http://localhost:3000/
    
## Kompilieren 

1. **Projekt bauen**
    1. npm run build