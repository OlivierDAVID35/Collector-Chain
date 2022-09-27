## Installation de postgreSQL en utilisant postgres.app
https://postgresapp.com/

## Lancer postgres depuis un terminal zsh :
psql postgres://postgres@localhost:5433/postgres

## commande depuis postgres (postgres=#)
\c nomdelabase --> pour se connecter à une bdd postgres
\i fichier --> importer un fichier .sql

## config .ENV
PORT=3000
DATABASE_URL=postgres://jerome:jerome@localhost:5433/collectorchain
ACCESS_TOKEN_SECRET=e01823375265a7a5b71a613777c08350a91ec6375c49ae794fefd8404f7d684398d32b7f01d2daf515ba4580129216d59721278edb18c90c910f404658a6a610
REFRESH_TOKEN_SECRET=0358a142a8d95e21b291e8e1b798bf3b4e91148ceb6749109aba40a7bffb8288431765bb2f16a574e7bee801a9d9a77ae04a6979066522df1410a2171198369f
EXPIRES_TOKEN=20s

## mise en place BDD depuis back
Si nécessaire, depuis postgres Faire revert/init.sql puis deploy/tous les fichiers dans l'ordre 
depuis terminal : node ./cc-back/data/seeding/importData.js