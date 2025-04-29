# Internship Flexso - hackathon readme:

# Inhoudsopgave 🚀

- [Welkom bij DE Hackathon App!](#welkom-bij-de-hackathon-app) 🎉
  - [Ontwikkelaars](#developers) 🧑‍💻
- [Definition of Done - Checklist](#definition-of-done---checklist-hackathon-app) ✅
  - [Algemene Vereisten](#algemene-vereisten) 📋
  - [Begeleider Functionaliteiten](#begeleider-functionaliteiten) 🦸
  - [Deelnemer Functionaliteiten](#deelnemer-functionaliteiten) 🏃‍♂️
  - [Statusspecifieke Vereisten](#statusspecifieke-vereisten) ⏰
- [Code Structuur](#code-structuur) 🗂️
- [App Uitvoeren](#run-de-app) 🏁
- [Postgres Instellen](#postgres) 🐘

# Welkom bij DE Hackathon App! 🎉

Klaar om de ultieme hackathon-ervaring te beleven? 💥 Dit is **DE Hackathon App**, waar code, creativiteit en competitie samenkomen! Laten we duiken in de magie die Jan en An hebben gecreëerd. 🪄

## Developers 🧑‍💻
- [Vera Wise](https://github.com/VW03) De code-wizard! 🧙‍♂️
- [Dordje Devaux](https://gitlab.com/dordje.devaux1) - De bug-banisher! 🛡️

Laten we eerst checken wat we eigenlijk aan het bouwen zijn! 🚧

# Definition of Done - Checklist Hackathon App ✅

## Algemene Vereisten 📋
- [x] SAPUI5 (- Fiori), CAP en PostgreSQL worden gebruikt voor het development.
- [ ] Applicatie ondersteunt twee rollen: **Begeleider**/**Facilitator** en **Deelnemer**/**Participant**.
- [x] Hackathon heeft vier statussen: **Voorbereiding**, **Actief**, **Evaluatie**, **Afgerond**.
- [ ] Competitiviteit staat centraal in de applicatie.
- [ ] Automatische validatie gebeurd bij het indienen van een vraag.

## Begeleider Functionaliteiten 🦸
- [x] Hackathons
  - [x] Zoeken
  - [x] Tonen
  - [x] Nieuwe anmaken
- [ ] Kan een bestaande hackathon bewerken.
- [ ] Kan vragen (uniek per team) toevoegen met bijbehorende antwoorden voor een hackathon.
- [x] Kan teams samenstellen voor een hackathon.
- [x] Teams
  - [x] Tonen
  - [x] Aanmaken
  - [x] Verwijderen
- [x] Gebruikers
  - [x] Tonen per team
  - [x] Toevoegen aan team
  - [x] Nieuwe gebruiker aanmaken
  - [x] Gebruiker verwijderen
- [ ] Ziet een overzichtspagina met de progressie van elk team tijdens de hackathon.
- [ ] Kan 3 types notificaties sturen om teams te motiveren.
- [ ] Ziet hoe lang een team aan een vraag werkt tijdens hackathon.
- [ ] Kan tijdens de hackathon een vraag goedkeuren als deze foutief fout is gevalideerd.
- [ ] Kan na afloop van de hackathon juiste vragen alsnog fout keuren.
- [x] Kan geen nieuwe vragen toevoegen wanneer de hackathon in de **Actief** status is.
- [x] Kan wanneer de hackathon  **Actief** is, een gebruiker op 'afwezig' of 'afwezig zonder verwittiging' zetten wanneer hij niet komt opdagen.

## Deelnemer Functionaliteiten 🏃‍♂️
- [ ] Na inloggen direct naar de huidige **Actieve** hackathon geleid.
- [ ] Kan met team tegelijk aan verschillende vragen werken (geen verplichte volgorde).
- [ ] Ziet een voortgangsbalk (progressbar) van het team.
- [ ] Ontvangt notificaties van de begeleider met een historiek.
- [ ] Scherm toont een ‘hurt’ animatie bij notificaties:
  - [ ] Rood bij negatieve notificaties.
  - [ ] Groen bij positieve notificaties.
  - [ ] Blauw bij custom notificaties.
- [ ] Ziet een top-3 ranglijst in willekeurige volgorde tijdens de hackathon.
- [ ] Ontvangt competitieve berichten zoals “Team 8 falling behind!” of “Team 2 a rising star!”.
- [ ] Ziet na afloop van de hackathon de echte ranglijst.

## Statusspecifieke Vereisten ⏰
- [x] **Voorbereiding / Preparation**: Deelnemers kunnen niet deelnemen. Begeleiders kunnen teams en vragen/antwoorden samenstellen.
- [x] **Actief / Active**: Begeleiders kunnen geen nieuwe vragen toevoegen. Maar wel teams moeten kunnen toevoegen of verwijderen. En Deelnemers op 'afwezig' zetten.
- [ ] **Evaluatie / Evaluation**: Begeleiders kunnen vragen goed- of afkeuren.
- [ ] **Afgerond / Completed**: Definitieve ranglijst wordt getoond aan begeleiders en deelnemers. Niets (teams,vragen/antwoorden) mag meer aangepast worden.


## Code Structuur 🗂️

| File or Folder | Purpose |
|---------|----------|
| `app/frontend/` | Frontend magie gebeurt hier! ✨ |
| `app/frontend/annotations.cds` | Service annotaties, saai maar belangrijk! 😴 |
| `app/frontend/package.json` | Frontend config, de blauwdruk! 📜 |
| `app/frontend/ui5.yaml` | Nog meer frontend config. 🛠️ |
| `app/frontend/i18n/` | Nederlands & Engels: we spreken jouw taal! 🌍 |
| `app/frontend/webapp/manifest.json` | SAP config met routing, de backbone! 🦴 |
| `app/frontend/webapp/index.html` | Startpunt van de app, thema vibes! 🎨 |
| `app/frontend/webapp/Component.js` | Routing initialisatie, de wegwijzer! 🗺️ |
| `app/frontend/webapp/controller/` | Controllers voor alle fun! 🎮 |
| `app/frontend/webapp/controller/service` | CRUD functies, de motor! 🚗 |
| `app/frontend/webapp/controller/util` | Dialog handlers, pop-ups galore! 🪟 |
| `app/frontend/webapp/css/style.css` | Een vleugje stijl voor persoonlijkheid! 💅 |
| `app/frontend/webapp/fragments/` | Dialog/pop-up XML’s, de kers op de taart! 🍒 |
| `app/frontend/webapp/view/` | Pagina XML’s, de gezichten van de app! 😊 |
| `db/data/` | Geseede data, klaar om te groeien! 🌱 |
| `db/schema.cds` | Het domein, onze fundering! 🏛️ |
| `srv/service.cds` | Alle services, de motor van de backend! ⚙️ |
| `package.json` | Project metadata, onze ID-kaart! 🪪 |
| `server.js` | Verbindt SAPUI5 met CAP, de matchmaker! 💞 |
| `pg.yml` & `.cdsrc.json` | Postgres lokaal opzetten, database power! 🐘 |
| `README.md` | Dit epische document! 📖 |

## App Uitvoeren 🏁
- CAP
```sh
cds watch
```
- SAP
```sh
npm install
npm start
```
- Checks
```sh
npm run ts-typecheck
```

## Postgres 🐘

Installeer de VSCode plugins voor database-fun:
- SQLTools
- SQLTools PostgreSQL/Cockroach Driver

![Postgres](docs/images/postgres.png) 

Start de Docker magie: 🔮
```sh
sudo docker-compose -f pg.yml down
sudo docker-compose -f pg.yml up -d
sudo docker ps
```
*Tip: Gebruik WSL in Windows en skip de "sudo"! 😉

Bij wijzigingen in gegevens:
```sh
npm i
cds deploy --profile pg 
cds build --production
cds add postgres
```
