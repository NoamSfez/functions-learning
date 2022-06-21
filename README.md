#### Launching

### Kill ports (in case of previous error in the emulator) and then run emulator

```bash
$ kill-port --port 8000,9099,5001,8080,9000,5000,8085,9199,4000,4400,4500 && firebase emulators:start
```

### Tunneling Network with LocalTunnel

## Tunneling emulator (on http://localhost:4000/)

```bash
$ lt --port 4000 --subdomain emulator-root
```

url: https://emulator-root.loca.lt

## Tunneling firebase cloud functions (on http://localhost:5001/)

```bash
$ lt --port 4000 --subdomain emulator-root
```

base-url: https://cloud-functions.loca.lt
project's pathname: /functions-learning-77e34/us-central1/{function_name}

example: https://cloud-functions.loca.lt/functions-learning-77e34/us-central1/api

#### Testing scripts:

## HTTPS triggered functions

You can call the api on the following url from Postman or rest.http file
https://cloud-functions.loca.lt/functions-learning-77e34/us-central1/api

on GET method : you will be redirected to an external api call's reponse (intern utilisation of axios)
on POST method : you will received the input body as a response
on DELETE method: you will received the string "DELETE request" as a response
on all others methods: you will received the string "Default request" as a response

This CRUD is also available on https://cloud-functions.loca.lt/functions-learning-77e34/us-central1/api_express with an inner usage of ExpressJS framework

These two APIs are available in rest.http file.

## Firebase Auth events

Create user and Delete it
It will call 2 event functions

## Firestore CRUD events

Create new collection "posts", and a simple post: will call "postAdded" event function
Delete a post: will call "postDeleted" event function
Update a post: will call "postUpdated" event function

## Scheduled functions

Need Blaze Plan
