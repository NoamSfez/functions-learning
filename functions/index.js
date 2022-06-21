const functions = require("firebase-functions");
const axios = require("axios");
const express = require("express");
const cors = require("cors");

/**
 * HTTPS triggered functions
 */
exports.helloWorld = functions.https.onRequest((req, res) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  res.send("Hello from Firebase!");
});

exports.api = functions.https.onRequest(async (req, res) => {
  switch (req.method) {
    case "GET":
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      res.send(response.data);
      break;
    case "POST":
      const body = req.body;
      res.send(body);
      break;
    case "DELETE":
      res.send("DELETE request");
      break;
    default:
      res.send("Default request");
  }
});

const app = express();
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.send("Running ExpressJS framework from cloud function");
});

app.get("/user/:id", (req, res) => {
  res.send(
    `Running ExpressJS framework from cloud function: user with id: ${req.params.id} is Noam`
  );
});

app.post("/user", (req, res) => {
  res.send(
    `Running ExpressJS framework from cloud function: just added user ${req.body.name}`
  );
});

exports.api_express = functions.https.onRequest(app);

/**
 * Firebase Auth events
 */
exports.userAdded = functions.auth.user().onCreate((user) => {
  console.log(`${user.email} is created`);
  return null;
});

exports.userDeleted = functions.auth.user().onDelete((user) => {
  console.log(`${user.email} is deleted`);
  return null;
});

/**
 * Firestore CRUD events
 */
exports.postAdded = functions.firestore
  .document("/posts/{documentId}")
  .onCreate((snapshot, context) => {
    console.log("Added data", snapshot.data());
    return null;
  });

exports.postDeleted = functions.firestore
  .document("/posts/{documentId}")
  .onDelete((snapshot, context) => {
    console.log("Deleted data", snapshot.data());

    return null;
  });

exports.postUpdated = functions.firestore
  .document("/posts/{documentId}")
  .onUpdate((snapshot, context) => {
    console.log(
      "Updated the post with id:",
      context.params.documentId,
      " from",
      snapshot.before.data(),
      " to ",
      snapshot.after.data()
    );
    return null;
  });

/**
 * Scheduled functions: Time, Pub/Sub (Need Blaze Plan)
 */
exports.scheduledFunction = functions.pubsub
  .schedule("*/5 * * * *")
  .onRun((context) => {
    console.log("i'm running every 5 minutes ");
    return null;
  });
exports.scheduledFunction2 = functions.pubsub
  .schedule("every 5 minutes")
  .onRun((context) => {
    console.log("This will be run every 1 minutes");
    return null;
  });
