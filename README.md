# projet-05-collector-chain

## Installation BACK

### Prérequis

- installer sqitch
- installer postgreSQL
- créer une BDD "collector_chain"
  - Pour créer la BDD (sudo -i -u postgres psql)
  - créer le User & le Password (CREATE USER nomDuLutilisateur WITH PASSWORD 'motDePasse';)
  - créér la base de données (CREATE DATABASE nomDeLaBase OWNER nomDuLutilisateur;)
  - attribuer le rôle de Superuser (ALTER ROLE nomUtilisateur WITH Superuser;)
  - faire la commande (psql -U nomUtilisateur -d nomDatabase -f ./data/seeding/seeding_1.sql) pour importer la bdd
- créer un fichier .env avec les informations de votre BDD "collector_chain"

1. Installer les differents modules

   ``` npm i ```

2. Importer la BDD

    ``` sqitch deploy ```

## Installation FRONT

1. Installer les modules
``` npm i ```

2. Lancer l'application
```npm run dev```
