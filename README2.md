### Installation:

npm install -g firebase-tools
firebase --version
firebase login (ou logout)
create project in the console
firebase init (ici sans emulator)
pour rajoiuter emulator
firebase init emulators et choisir ceux qu'on veut
firebase emulators:start

### 4 sortes de functions:

HTTPS triggered functions
Firebase Auth events
Firestore CRUD events
Scheduled functions

## comme postman, extension REST donc creer un fichier rest.http dans function

## On peut itioliser des packages npm a l'interir de notre fichier json comme par exmplae axios ou express

## En cas d'erreur et que l'emulateur sautte les ports restent bloquer donc il faut faire pour relancer:

```bash
$ kill-port --port 8000,9099,5001,8080,9000,5000,8085,9199,4000,4400,4500 && firebase emulators:start
```

## Pour avoir des cron expressions il y a le site:

https://crontab.guru/

## Test script:

Appeler differentes functions HTTP directement sur rest.http / Postman

creer un user et le supprimer, appelle des deux functions

#### Tunneling Network: LocalTunnel

# Tunneling emulator by

```bash
$ lt --port 4000 --subdomain emulator-root
```

url: https://emulator-root.loca.lt

# Tunneling firebase cloud functions

```bash
$ lt --port 4000 --subdomain emulator-root
```

base-url: https://cloud-functions.loca.lt
project's pathname: /functions-learning-77e34/us-central1/{function_name}

example: https://cloud-functions.loca.lt/functions-learning-77e34/us-central1/api
